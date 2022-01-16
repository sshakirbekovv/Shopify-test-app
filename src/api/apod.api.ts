import axios from "axios";
import { api_url } from "../environments/environment";
import { Apod } from "../types/apod.types";

export const getApod = (start_date: string, end_date: string) => {
    const params: any = {
        start_date: start_date,
        end_date: end_date,
        api_key: 'DEMO_KEY',
        count: 8
    }

    return axios.request<Apod[]>({
        url: `${api_url}/api`,
        method: 'get',
        params
    });
}