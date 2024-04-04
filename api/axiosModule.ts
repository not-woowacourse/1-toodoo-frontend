import axios from 'axios';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const instance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Client-Name': 'Yuna Kim',
  },
});

export default instance;
