import axios, { AxiosError } from 'axios';

interface FaqType {
  faqTitle: string;
  faqContent: string;
}
const url = process.env.REACT_APP_SERVER;
export const FaqPostApi = async (faqData: FaqType) => {
  try {
    const token = sessionStorage.getItem('login');
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
    const token = sessionStorage.getItem('login');
    const userId = sessionStorage.getItem('userId');
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
export const FaqDeleteApi = async (id: number) => {
  try {
    const token = sessionStorage.getItem('login');
    const res = await axios.delete(`${url}/api/faqs/${id}`, {
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
