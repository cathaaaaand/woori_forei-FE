import axios, { AxiosError } from 'axios';

interface ProfilePatchType {
  username: string;
  nickname: string;
  email: string;
  description: string;
  mbti: string;
  birthday: string;
  nation: string;
}
const url = process.env.REACT_APP_SERVER;

export const userProfileApi = async () => {
  try {
    const userId = sessionStorage.getItem('userId');
    const res = await axios.get(`${url}/api/users/${userId}`);
    return res.data.payload;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const userDeleteApi = async (string: string) => {
  try {
    const token = sessionStorage.getItem('login');
    const userId = sessionStorage.getItem('userId');
    const res = await axios.get(`${url}/api/users/${userId}`, {
      headers: {
        Authorization: token,
      },
    });
    if (string) {
      return res.data.payload;
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};

export const ProfileUpdataApi = async (PatchData: ProfilePatchType) => {
  try {
    const token = sessionStorage.getItem('login');
    const userId = sessionStorage.getItem('userId');
    const res = await axios.patch(`${url}/api/users/${userId}`, PatchData, {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
