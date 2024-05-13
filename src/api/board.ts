import axios, { AxiosError } from 'axios';
import { Cookies } from 'react-cookie';

const url = process.env.REACT_APP_SERVER;

export const boardCreateApi = async (Data: FormData) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const res = await axios.post(`${url}/api/communities`, Data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token,
        accept: 'application/json,text/html',
      },
      transformRequest: (Data) => Data,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const boardRecentApi = async () => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const res = await axios.get(`${url}/api/communities`, {
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
export const boardSingleApi = async () => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.get(`${url}/api/communities/${userId}`, {
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
//게시글 id로 변경 필요!
export const boardPatchApi = async (Data: FormData) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.post(`${url}/api/communities/${userId}`, Data, {
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

export const boardDeleteApi = async (id: number) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const res = await axios.delete(`${url}/api/communities/${id}`, {
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

//어떻게 이건 조회하는지 문의 바디도  헤더도 id도 없음
export const boardMyWritingApi = async () => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const res = await axios.get(`${url}/api/communities/myboard`, {
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
//좋아요 기능은 뭘 보내는 것이 없는데 어떻게 포스트가 되는지?
export const boardLikeApi = async (id: number) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const res = await axios.post(`${url}/api/communities/${id}/like`, {
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
export const boardLikeGetApi = async () => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const res = await axios.get(`${url}/api/communities/like`, {
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
