import axios, { AxiosError } from 'axios';
import { Cookies } from 'react-cookie';
interface FaqType {
  faqTitle: string;
  faqContent: string;
}
const url = process.env.REACT_APP_SERVER;
export const FaqPostApi = async (faqData: FaqType) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const res = await axios.post(`${url}/api/faqs`, faqData, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const FaqPutApi = async (faqData: FaqType) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.put(`${url}/api/faqs/${userId}`, faqData, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const FaqGetApi = async () => {
  try {
    const res = await axios.get(`${url}/api/faqs`);
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const FaqDeleteApi = async () => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.delete(`${url}/api/faqs/${userId}`, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
