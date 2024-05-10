import axios, { AxiosError } from 'axios';
import { Cookies } from 'react-cookie';

const url = process.env.REACT_APP_SERVER;

export const commentCreateApi = async (Data: string) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.post(`${url}/api/comments/${userId}`, Data, {
      headers: {
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

export const commentTotalApi = async () => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.get(`${url}/api/comments/${userId}`, {
      headers: {
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
interface CommentDataType {
  commentContent: string;
}
export const commentPatchApi = async (Data: CommentDataType) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.patch(`${url}/api/comments/${userId}`, Data, {
      headers: {
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
export const commentDeleteApi = async () => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.delete(`${url}/api/comments/${userId}`, {
      headers: {
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
export const commentMineApi = async () => {
  try {
    const res = await axios.get(`${url}/api/comments/mycomment`);
    return res.data;
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
