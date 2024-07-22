import api from "../api";

export const signin = async ({data}) => {
    const response = await api.post("/server/signin/", data);
    return response.status;
}