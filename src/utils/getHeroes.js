import axios from "axios";
import config from '../config'

export default async (limit = null, startWith = null, events = null) => {
    let {url, ts, hash, apiKey} = config;
    let params = {
        ts,
        hash,
        apikey: apiKey
    }
    if(startWith) {
        params.nameStartsWith = startWith;
    } else {
        delete  params.nameStartsWith;
    }
    if(limit) {
        params.limit = limit;
    } else {
        delete  params.limit;
    }
    if(events && events.length) {
        params.events = events;
    } else {
        delete  params.events;
    }
    let result = await axios.get(`${url}/characters`, {
        params
    });
    return result?.data?.data?.results;
}