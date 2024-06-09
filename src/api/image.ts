import axios, { AxiosError } from 'axios';

axios.defaults.withCredentials = true;
const url = process.env.REACT_APP_SERVER;
export const imageGetApi = async () => {
  try {
    const token = sessionStorage.getItem('login');
    const res = await axios.get(`${url}/api/images/profile`, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const imageUploadApi = async (formData: FormData) => {
  try {
    const token = sessionStorage.getItem('login');
    const res = await axios.post(`${url}/api/images/profile`, formData, {
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

export const imageDeleteApi = async (string: string) => {
  try {
    const token = sessionStorage.getItem('login');
    const res = await axios.delete(`${url}/api/images/profile`, {
      headers: {
        Authorization: token,
      },
    });
    if (string) {
      return res.data;
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
