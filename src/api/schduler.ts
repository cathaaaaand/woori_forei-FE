import axios, { AxiosError } from 'axios';
import { Cookies } from 'react-cookie';

interface SchedulerCreateType {
  schedulerName: string;
  startDate: string;
  endDate: string;
  memberEmails: Array<string>;
}
interface SchedulerPutType {
  schedulerName: string;
  startDate: string;
  endDate: string;
  memberEmails: [];
}

const url = process.env.REACT_APP_SERVER;

export const schedulerCreateApi = async (
  schedulerData: SchedulerCreateType,
) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const res = await axios.post(`${url}/api/schedulers`, schedulerData, {
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
export const schedulerGet1Api = async () => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.get(`${url}/api/schedulers/${userId}`, {
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
export const schedulerGetTotalApi = async () => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const res = await axios.get(`${url}/api/schedulers`, {
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
export const schedulerPuteApi = async (schedulerData: SchedulerPutType) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.post(
      `${url}/api/schedulers/${userId}`,
      schedulerData,
      {
        headers: {
          Authorization: token,
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
export const schedulerDeleteApi = async () => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.delete(`${url}/api/schedulers/${userId}`, {
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
interface ActivitiesType {
  activityId: number;
  visitStart: string;
  visitEnd: string;
}
export const schedulerActivitiesApi = async (Data: ActivitiesType) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.post(
      `${url}/api/schedulers/${userId}/activities`,
      Data,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
interface HotelsType {
  hotelsId: number;
  stayStart: string;
  stayEnd: string;
}
export const schedulerHotelsApi = async (Data: HotelsType) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.post(
      `${url}/api/schedulers/${userId}/hotels`,
      Data,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
interface InformationType {
  informationId: number;
  visitStart: string;
  visitEnd: string;
}
export const schedulerInformationApi = async (Data: InformationType) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.post(
      `${url}/api/schedulers/${userId}/information`,
      Data,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
interface LandmarksType {
  landmarkId: number;
  visitStart: string;
  visitEnd: string;
}
export const schedulerIlandmarksApi = async (Data: LandmarksType) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.post(
      `${url}/api/schedulers/${userId}/landmarks`,
      Data,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
interface RestaurantsType {
  restaurantId: number;
  visitStart: string;
  visitEnd: string;
}
export const schedulerRestaurantsApi = async (Data: RestaurantsType) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.post(
      `${url}/api/schedulers/${userId}/restaurants`,
      Data,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
interface SeoulgoodsType {
  goodsId: number;
  visitStart: string;
  visitEnd: string;
}
export const schedulerSeoulgoodsApi = async (Data: SeoulgoodsType) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    const userId = cookieLogin
      ? cookies.get('userId')
      : sessionStorage.getItem('userId');
    const res = await axios.post(
      `${url}/api/schedulers/${userId}/seoul-goods`,
      Data,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
