import api from "../api";

export const signup = async ({data, setError}) => {
    try{
        const response = await api.post("/server/signup/", data);
    } catch(e) {
        console.error(e);
    }
}