import axios, { AxiosError } from 'axios';

const url = process.env.REACT_APP_SERVER;
const token = sessionStorage.getItem('login');
const userId = sessionStorage.getItem('userId');
export const commentCreateApi = async (Data: { commentContent: string }) => {
  try {
    const res = await axios.post(`${url}/api/comments/${userId}`, Data, {
      headers: {
        'Content-Type': 'application/json',
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

export const commentTotalApi = async () => {
  try {
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
    const res = await axios.patch(`${url}/api/comments/${userId}`, Data, {
      headers: {
        'Content-Type': 'application/json',
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
export const commentDeleteApi = async (id: number) => {
  try {
    const res = await axios.delete(`${url}/api/comments/${id}`, {
      headers: {
        'Content-Type': 'application/json',
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
