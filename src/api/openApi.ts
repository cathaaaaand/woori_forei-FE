import axios from 'axios';

export const informationApi = async () => {
  try {
    const res = await axios.get(
      'https://www.wooriforei.info/api/openAPI/informations/check',
    );
    return res.data;
  } catch (error) {
    // const res = await axios.get(
    //   'https://www.wooriforei.info/api/openAPI/informations/800/check',
    //   {
    //     withCredentials: true,
    //   },
    // );
    console.log(error);
  }
};
