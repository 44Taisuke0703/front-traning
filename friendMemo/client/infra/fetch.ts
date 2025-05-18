import axios from 'axios';
export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,

});

export const fetcher = async (url: string,) => {
    const response = await axiosInstance.get(url);
    return response.data;
}
