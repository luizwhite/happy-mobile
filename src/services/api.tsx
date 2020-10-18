import axios from 'axios';
const ngrokPort_3333 = 'http://8077cf81e271.ngrok.io';

const api = axios.create({
  baseURL: /*'http://172.29.130.198:3333'*/ngrokPort_3333,
});

export default api;