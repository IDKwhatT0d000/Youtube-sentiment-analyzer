import axios from 'axios';

export const options = {
  method: 'GET',
  url: 'https://yt-api.p.rapidapi.com/comments',
  headers: {
    'X-RapidAPI-Key': '4f05dc91e8msh998020a08c26f55p10f83fjsn1f205e13311f',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
  }
};

export const getComments = async (opt) => {
  try {
    const response = await axios.request(opt);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments: ", error);
    throw error;
  }
};
