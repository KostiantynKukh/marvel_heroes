import axios from "axios";
import config from '../config'

export default async () => {
    let {url, ts, hash, apiKey} = config;
    let params = {
        ts,
        hash,
        apikey: apiKey,
        limit: 100
    }
    let result = await axios.get(`${url}/events`, {
        params
    });
    return result?.data?.data?.results;
}