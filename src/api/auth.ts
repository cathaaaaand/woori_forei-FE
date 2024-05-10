import axios, { AxiosError } from 'axios';
import { Cookies } from 'react-cookie';

interface LoginType {
  email: string;
  password: string;
}
interface SignUpType {
  username: string;
  nickname: string;
  email: string;
  password: string;
  checkPassword: string;
  description: string;
  mbti: string;
  birthday: string;
  nation: string;
  isAgreed: boolean;
  isAdmin: boolean;
  secretCode?: string;
}
interface EmailCodeSendType {
  email: string;
}
interface EmailCodeConfirmType {
  email: string;
  verificationCode: string;
}
const cookies = new Cookies();
const expireDate = new Date();

export const loginApiFn = (LoginMainTain: boolean) => {
  expireDate.setMonth(expireDate.getMonth() + 1);
  const loginApi = async (Login: LoginType) => {
    try {
      const res = await axios.post('/api/auth/login', Login);
      const accessToken = res.headers['authorization'];
      if (accessToken) {
        LoginMainTain
          ? cookies.set('login', accessToken, {
              path: '/',
              expires: expireDate,
            })
          : sessionStorage.setItem('login', accessToken);
        axios.defaults.headers.common['Authorization'] = `${accessToken}`;
        //get 요청마다 담아보내는 것.
      }
      if (res.data.payload) {
        const userId = res.data.payload.userId;
        LoginMainTain
          ? cookies.set('userId', userId, {
              path: '/',
              expires: expireDate,
            })
          : sessionStorage.setItem('userId', userId);
      }
      return res.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      throw axiosError.response?.data;
    }
  };
  return { loginApi };
};
export const googleLoginPostApi = async (code: string | null) => {
  try {
    const res = await axios.post(
      '/api/auth/google-login',
      { code },
      {
        headers: {
          'Content-Type': 'application/json',
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
export const googleLoginApi = async () => {
  try {
    const res = await axios.get('/api/auth/google-login');
    console.log(res);
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const signUpApi = async (SignUp: SignUpType) => {
  try {
    const res = await axios.post('/api/auth/signup', SignUp);
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const emailCodeSendApi = async (Email: EmailCodeSendType) => {
  try {
    const res = await axios.post('/api/auth/send-verification-email', Email);
    if (res.status === 200) return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const emailCodeConfirmApi = async (Confrim: EmailCodeConfirmType) => {
  try {
    const res = await axios.post('/api/auth/verify-email', Confrim);
    if (res.status === 200) return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
