import * as etfApi from "../api/etf";
import * as default_etf from "../components/etf/data";

const GET_ETF = "GET_ETF";
const CLEAR_ETF = "CLEAR_ETF";

export const getEtf = (search) => async (dispatch) => {
    const result = await etfApi.getEtf(search);
    dispatch({ type: GET_ETF, payload: result });
}

export const clearEtf = () => ({ type: CLEAR_ETF });

const initUnit = {
    'etf_name': default_etf.etf_name, 
    'date_idx': default_etf.date_idx, 
    'etf_value': default_etf.etf_value,
    'ks_value': default_etf.ks_value, 
    'etf_yield': default_etf.etf_yield,
    'stock_yield': default_etf.stock_yield,
    'c_rate': default_etf.c_rate, 
    'c_list': default_etf.c_list
};

export default function etf(state = initUnit, action) {
    switch(action.type) {
        case GET_ETF:
            return action.payload;
        case CLEAR_ETF:
            return initUnit;
        default:
            return state;
    }
}