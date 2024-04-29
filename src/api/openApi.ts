import axios from 'axios';

export const informationApi = async () => {
  try {
    const res = await axios.get('/api/openAPI/informations/check', {
      withCredentials: true,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
