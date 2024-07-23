import api from "../api";

export const signup = async ({data, setError}) => {
    try{
        const response = await api.post("/server/signup/", data);
        return response.status;
    } catch(e) {
        console.error(e);
        setError(e);
    }
}