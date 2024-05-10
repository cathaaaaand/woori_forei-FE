import axios, { AxiosError } from 'axios';
import { Cookies } from 'react-cookie';

axios.defaults.withCredentials = true;

export const imageGetApi = async () => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const res = await axios.get('/api/images/profile', {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const imageUploadApi = async (formData: FormData) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const res = await axios.post('/api/images/profile', formData, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};

export const imageDeleteApi = async () => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const res = await axios.delete('/api/images/profile', {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
