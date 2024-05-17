import axios, { AxiosError } from 'axios';

const url = process.env.REACT_APP_SERVER;
export const commentApi = (id: number) => {
  const commentCreateApi = async (Data: { commentContent: string }) => {
    try {
      const token = sessionStorage.getItem('login');
      const res = await axios.post(`${url}/api/comments/${id}`, Data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
          Accept: 'application/json',
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
      const axiosError = error as AxiosError;
      throw axiosError.response?.data;
    }
  };
  return commentCreateApi;
};

export const commentTotalApi = async (id: number) => {
  try {
    // const token = sessionStorage.getItem('login');
    const res = await axios.get(`${url}/api/comments/${id}`);
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
    const token = sessionStorage.getItem('login');
    const userId = sessionStorage.getItem('userId');
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
    const token = sessionStorage.getItem('login');
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
