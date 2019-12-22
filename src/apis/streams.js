import axios from 'axios';

export default axios.create({
  baseURL: 'http://freebox.bitsurge.net:3001',
});
