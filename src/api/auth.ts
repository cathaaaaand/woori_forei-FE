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
const url = process.env.REACT_APP_SERVER;

export const loginApiFn = (LoginMainTain: boolean) => {
  const cookies = new Cookies();
  const expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + 30);
  const loginApi = async (Login: LoginType) => {
    try {
      const res = await axios.post(`${url}/api/auth/login`, Login, {
        withCredentials: true,
      });
      const accessToken = res.headers['authorization'];
      if (accessToken) {
        LoginMainTain
          ? cookies.set('login', accessToken, {
              path: '/',
              expires: expireDate,
            })
          : sessionStorage.setItem('login', accessToken);
        axios.defaults.headers.common['Authorization'] = `${accessToken}`;
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
      `${url}/api/auth/google-login`,
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
    const res = await axios.get(`${url}/api/auth/google-login`);
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const signUpApi = async (SignUp: SignUpType) => {
  try {
    const res = await axios.post(`${url}/api/auth/signup`, SignUp);
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const emailCodeSendApi = async (Email: EmailCodeSendType) => {
  try {
    const res = await axios.post(
      `${url}/api/auth/send-verification-email`,
      Email,
    );
    if (res.status === 200) return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const emailCodeConfirmApi = async (Confrim: EmailCodeConfirmType) => {
  try {
    const res = await axios.post(`${url}/api/auth/verify-email`, Confrim);
    if (res.status === 200) return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
