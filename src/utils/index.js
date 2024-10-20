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

export const options2 = {
  method: 'GET',
  url: 'https://real-time-amazon-data.p.rapidapi.com/product-reviews',
  params: {
    asin: 'B07ZPKN6YR',
    country: 'IN',
    sort_by: 'TOP_REVIEWS',
    star_rating: 'ALL',
    verified_purchases_only: 'false',
    images_or_videos_only: 'false',
    current_format_only: 'false',
    page: '1'
  },
  headers: {
    'x-rapidapi-key': '4f05dc91e8msh998020a08c26f55p10f83fjsn1f205e13311f',
    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
  }
};

export const getReviews=async(options2)=>{
  try {
    const response = await axios.request(options2);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}