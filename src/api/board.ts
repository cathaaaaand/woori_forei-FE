import axios, { AxiosError } from 'axios';

const url = process.env.REACT_APP_SERVER;

export const boardCreateApi = async (Data: FormData) => {
  try {
    const token = sessionStorage.getItem('login');
    const res = await axios.post(`${url}/api/communities`, Data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token,
        accept: 'application/json,text/html',
      },
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
    const res = await axios.get(`${url}/api/communities`);
    return res.data.payload;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const boardSingleApi = async (id: number) => {
  try {
    const res = await axios.get(`${url}/api/communities/${id}`);
    return res.data.payload;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};

export const boardPatchApi = async (Data: FormData, id: number) => {
  try {
    const token = sessionStorage.getItem('login');
    const res = await axios.post(`${url}/api/communities/${id}`, Data, {
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
    const token = sessionStorage.getItem('login');
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

export const boardMyWritingApi = async () => {
  try {
    const res = await axios.get(`${url}/api/communities/myboard`);
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
// export const boardLikeApiGet = async (id: number) => {
//   try {
//     const res = await axios.get(`${url}/api/communities/${id}/like`);
//     console.log(res);
//     return res;
//   } catch (error) {
//     const axiosError = error as AxiosError;
//     throw axiosError.response?.data;
//   }
// };
export const boardLikeApi = async (id: number) => {
  try {
    const token = sessionStorage.getItem('login');
    const res = await axios.post(`${url}/api/communities/${id}/like`, id, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
        Accept: 'application/json',
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
    const res = await axios.get(`${url}/api/communities/like`);
    return res.data.payload;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
