import axios, { AxiosError } from 'axios';

export const informationApi = async () => {
  try {
    const res = await axios.get(
      'https://www.wooriforei.info/api/openAPI/informations/check',
    );
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
