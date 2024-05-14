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
const url = process.env.REACT_APP_SERVER;

export const userProfileApi = async () => {
  try {
    const userId = localStorage.get('userId');
    console.log(userId);
    const res = await axios.get(`${url}/api/users/${userId}`);

    return res.data.payload;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};

export const ProfileUpdataApi = async (PatchData: ProfilePatchType) => {
  try {
    const cookies = new Cookies();
    const userId = cookies.get('userId');
    const res = await axios.patch(`${url}/api/users/${userId}`, PatchData, {
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
