import axios, { AxiosError } from 'axios';
export interface CultureType {
  activityId: number | undefined;
  placenm: string | undefined;
  svcnm: string | undefined;
}
const url = process.env.REACT_APP_SERVER;
export const informationApi = async () => {
  try {
    const res = await axios.get(`${url}/api/openAPI/informations/check`);
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const seoulGoodsApi = async () => {
  try {
    const res = await axios.get(`${url}/api/openAPI/seoulgoods/check`);
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const activitiePotosApi = async () => {
  try {
    const res = await axios.get(`${url}/api/openAPI/activities/check`);
    const filteredData = res.data.filter((_: unknown, index: number) =>
      [2, 96, 196, 198, 301, 302, 303, 304, 305, 315, 316].includes(index),
    );
    return filteredData;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const activitiesMonthApi = async () => {
  try {
    const res = await axios.get(`${url}/api/openAPI/activities/check`);
    const slice = res.data.slice(0, 100);
    const today = new Date();
    const filtered2 = await slice.filter(
      (item: { rcptenddt: number; placenm: string }) => {
        const condition = new Date(item.rcptenddt) > today;
        return condition;
      },
    );
    return filtered2;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const activitiesApi = async () => {
  try {
    const res = await axios.get(`${url}/api/openAPI/activities/check`);
    const filtered = res.data.filter((item: { svcstatnm: string }) => {
      return item.svcstatnm === '접수중';
    });
    return filtered;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const hotelsnApi = async () => {
  try {
    const res = await axios.get(`${url}/api/openAPI/hotels/check`);
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const landmarksnApi = async () => {
  try {
    const res = await axios.get(`${url}/api/openAPI/landmarks/check`);
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const landmarksFilternApi = async () => {
  try {
    const res = await axios.get(`${url}/api/openAPI/landmarks/check`);
    const filteredData = res.data.filter((_: unknown, index: number) =>
      [9, 36, 40, 52, 87, 149, 109, 853, 1043, 1033].includes(index),
    );
    return filteredData;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const restaurantsApi = async () => {
  try {
    const res = await axios.get(`${url}/api/openAPI/restaurants/check`);
    const sliceData = res.data.slice(0, 500);
    return sliceData;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
