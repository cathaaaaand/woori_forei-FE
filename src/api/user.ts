import axios, { AxiosError } from 'axios';

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

const token = sessionStorage.getItem('login');
const userId = sessionStorage.getItem('userId');
export const userProfileApi = async () => {
  try {
    const res = await axios.get(`${url}/api/users/${userId}`);
    return res.data.payload;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};

export const ProfileUpdataApi = async (PatchData: ProfilePatchType) => {
  try {
    const res = await axios.patch(`${url}/api/users/${userId}`, PatchData, {
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
