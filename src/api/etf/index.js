import axios from "axios";

import { API_BASE_URL } from "..";

export const getEtfList = async(page) => {
    const url = API_BASE_URL+"/";
    return await axios
        .post(url, { "idx": page })
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            console.log(error);
        })
}

export const getEtf = async(search) => {
    const url = API_BASE_URL+"/etf";
    return await axios
        .post(url, search)
        .then((reponse) => {
            return reponse.data;
        })
        .catch((error) => {
            alert("해당 기간에 데이터가 없습니다.");
        })
}