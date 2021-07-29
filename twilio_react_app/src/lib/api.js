import { makeCallUrl } from './urls';
const axios = require('axios');

const makeCall = (obj) => {
  return axios.post(makeCallUrl, obj);
};

export { makeCall };
