import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyBrEW1Zea9vMYzse-yaU3HPnNuzXAqSjiw';

const options = {
  params: {
    part: 'snippet',
    maxResults: 50,
    type: 'video',
    videoCategoryId: '10'
  },
  headers: {
    'Content-Type': 'application/json'
  }
};

export const fetchFromAPI = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, {
    params: {
      key: API_KEY,
      ...options.params
    }
  });

  return response.data;
};

// Example usage:
fetchFromAPI('search')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });