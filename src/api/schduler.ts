import axios, { AxiosError } from 'axios';
import { Cookies } from 'react-cookie';

interface SchedulerCreateType {
  schedulerName: string;
  startDate: string;
  endDate: string;
  memberEmails: Array<string>;
}
interface SchedulerPutType {
  schedulerData: {
    schedulerName: string;
    startDate: string;
    endDate: string;
    memberEmails: Array<string | undefined>;
  };
  schedulerId: number;
}

const url = process.env.REACT_APP_SERVER;

export const schedulerCreateApi = async (
  schedulerData: SchedulerCreateType,
) => {
  try {
    const res = await axios.post(`${url}/api/schedulers`, schedulerData);
    return res.data;
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const schedulerGet1Api = async (schedulerId: number) => {
  try {
    if (schedulerId > 0) {
      const res = await axios.get(`${url}/api/schedulers/${schedulerId}`);
      return res.data;
    } else {
      return '데이터가 없습니다.';
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const schedulerGetTotalApi = async () => {
  try {
    const res = await axios.get(`${url}/api/schedulers`);
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const schedulerPutApi = async (Data: SchedulerPutType) => {
  try {
    if (Data.schedulerId > 0) return;
    const res = await axios.put(
      `${url}/api/schedulers/${Data.schedulerId}`,
      Data.schedulerData,
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
export const schedulerDeleteApi = async (schedulerId: number) => {
  try {
    if (schedulerId > 0) {
      const res = await axios.delete(`${url}/api/schedulers/${schedulerId}`);
      return res.data;
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
interface ActivitiesType {
  Activities: { activityId: number; visitStart: string; visitEnd: string };
  schedulerId: number;
}
export const schedulerActivitiesApi = async (Data: ActivitiesType) => {
  try {
    const cookies = new Cookies();
    const cookieLogin = cookies.get('login');
    const token = cookieLogin ? cookieLogin : sessionStorage.getItem('login');
    if (Data.schedulerId > 0) {
      const res = await axios.post(
        `${url}/api/schedulers/${Data.schedulerId}/activities`,
        Data.Activities,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      return res.data;
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
interface HotelsType {
  Hotels: { hotelId: number; stayStart: string; stayEnd: string };
  schedulerId: number;
}
export const schedulerHotelsApi = async (Data: HotelsType) => {
  try {
    if (Data.schedulerId > 0) {
      const res = await axios.post(
        `${url}/api/schedulers/${Data.schedulerId}/hotels`,
        Data.Hotels,
      );
      return res.data;
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
interface InformationType {
  Information: { informationId: number; visitStart: string; visitEnd: string };
  schedulerId: number;
}
export const schedulerInformationApi = async (Data: InformationType) => {
  try {
    if (Data.schedulerId > 0) {
      const res = await axios.post(
        `${url}/api/schedulers/${Data.schedulerId}/information`,
        Data.Information,
      );
      return res.data;
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
interface LandmarksType {
  Landmarks: { landmarkId: number; visitStart: string; visitEnd: string };
  schedulerId: number;
}
export const schedulerLandmarksApi = async (Data: LandmarksType) => {
  try {
    if (Data.schedulerId > 0) {
      const res = await axios.post(
        `${url}/api/schedulers/${Data.schedulerId}/landmarks`,
        Data.Landmarks,
      );
      return res.data;
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
interface RestaurantsType {
  Restaurants: { restaurantId: number; visitStart: string; visitEnd: string };
  schedulerId: number;
}
export const schedulerRestaurantsApi = async (Data: RestaurantsType) => {
  try {
    if (Data.schedulerId > 0) {
      const res = await axios.post(
        `${url}/api/schedulers/${Data.schedulerId}/restaurants`,
        Data.Restaurants,
      );
      return res.data;
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
interface SeoulgoodsType {
  Seoulgoods: { goodsId: number; visitStart: string; visitEnd: string };
  schedulerId: number;
}
export const schedulerSeoulgoodsApi = async (Data: SeoulgoodsType) => {
  try {
    if (Data.schedulerId > 0) {
      const res = await axios.post(
        `${url}/api/schedulers/${Data.schedulerId}/seoul-goods`,
        Data.Seoulgoods,
      );
      return res.data;
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
