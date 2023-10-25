import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const baseURL = 'http://209.45.80.77:4001/api';


const alertainfoApi = axios.create({baseURL});

alertainfoApi.interceptors.request.use(
    async(config) =>{
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.token = token;
        }
        return config;
    }
);


export default alertainfoApi;