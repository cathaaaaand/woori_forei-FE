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
  introduction: string;
  mbti: string;
  birthday: string;
  nation: string;
  image: string;
  isAgreed: boolean;
  isAdmin: boolean;
  phoneNumber: string;
  secretCode?: string;
}
interface EmailCodeSendType {
  email: string;
}
interface EmailCodeConfirmType {
  email: string;
  verificationCode: string;
}
export const loginApiFn = (LoginMainTain: boolean) => {
  const cookies = new Cookies();
  const expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + 30);

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
      }
      return res.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      throw axiosError.response?.data;
    }
  };
  return { loginApi };
};
export const loginOutApi = () => {
  sessionStorage.removeItem('login');
  alert('로그아웃 되었습니다!');
};
// export const googleLoginApi = async (data: string | null) => {
//   try {
//     const res = await axios.post(
//       '/api/auth/google-login',
//       data,
//     );
//     const accessToken = res.data.accessToken;
//     localStorage.setItem('bagtoken', accessToken);
//     res.data.isExistingMember
//       ? console.log('이미 가입')
//       : console.log('처음가입');
//     return res.data;
//   } catch (error) {
//     const axiosError = error as AxiosError;
//     throw axiosError.response?.data;
//   }
// };
export const googleLoginApi = async () => {
  try {
    const res = await axios.get('/api/auth/google-login');
    console.log(res);
    return res;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const signUpApi = async (SignUp: SignUpType) => {
  try {
    const res = await axios.post('/api/auth/signup', SignUp);
    if (res.status === 200) return res.data;
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
