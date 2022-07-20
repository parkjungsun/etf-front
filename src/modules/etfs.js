import * as etfApi from "../api/etf"

const GET_ETF_LIST = "GET_ETF_LIST";
const CLEAR_ETF_LIST = "CLEAR_ETF_LIST";
const GET_MORE_LIST = "GET_MORE_LIST";

export const getEtfs = (page) => async (dispatch) => {
    const result = await etfApi.getEtfList(page);
    dispatch({ type: GET_ETF_LIST, payload: result });
}

export const getMoreEtfs = (page) => async (dispatch) => {
    const result = await etfApi.getEtfList(page);
    dispatch({ type: GET_MORE_LIST, payload: result });
}

export const clearEtfs = () => ({ type: CLEAR_ETF_LIST });

const initList = [];

export default function etfs(state = initList, action) {
    switch(action.type) {
        case GET_ETF_LIST:
            return action.payload;
        case GET_MORE_LIST:
            return state.concat(action.payload);
        case CLEAR_ETF_LIST:
            return initList;
        default:
            return state;
    }
}