import axios from "axios";
import config from '../config'

export default async (id) => {
  let {url, ts, hash, apiKey} = config;
  let params = {
    ts,
    hash,
    apikey: apiKey
  }
  let result = await axios.get(`${url}/characters/${id}`, {
    params
  });
  return result?.data?.data?.results;
}