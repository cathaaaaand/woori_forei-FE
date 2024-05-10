import axios, { AxiosError } from 'axios';
import { Cookies } from 'react-cookie';

interface ProfilePatchType {
  username: string;
  nickname: string;
  email: string;
  description: null;
  mbti: string;
  birthday: string;
  nation: string;
  schedulerId: null;
  boardId: null;
  commentId: null;
  image: null;
}
axios.defaults.withCredentials = true;
export const userProfileApi = async () => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.get(`/api/users/${userId}`, {
      headers: {
        Authorization: token,
      },
    });

    return res.data.payload;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};

export const ProfileUpdataApi = async (PatchData: ProfilePatchType) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.patch(`/api/users/${userId}`, PatchData, {
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
