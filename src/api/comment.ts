import axios, { AxiosError } from 'axios';

const url = process.env.REACT_APP_SERVER;
export const commentApi = (id: number) => {
  const commentCreateApi = async (commentContent: string) => {
    try {
      const token = sessionStorage.getItem('login');
      const res = await axios.post(
        `${url}/api/comments/${id}`,
        { commentContent },
        {
          headers: {
            Authorization: token,
          },
        },
      );
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
    const res = await axios.get(`${url}/api/comments/${id}`, {
      headers: {
        'Content-Type': 'application/json',
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
//403 다시 확인
export const commentPatchMeApi = (id: number) => {
  const commentPatchApi = async (commentContent: string) => {
    try {
      const token = sessionStorage.getItem('login');
      const res = await axios.patch(
        `${url}/api/comments/${id}`,
        { commentContent },
        {
          headers: {
            Authorization: token,
          },
        },
      );
      return res.data;
    } catch (error) {
      console.log(error);
      const axiosError = error as AxiosError;
      throw axiosError.response?.data;
    }
  };
  return commentPatchApi;
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
    const token = sessionStorage.getItem('login');
    const res = await axios.get(`${url}/api/comments/mycomment`, {
      headers: {
        Authorization: token,
      },
    });
    return res.data.payload;
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
