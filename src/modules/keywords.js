import * as newsApi from "../api/news"; 

const GET_KEYWORDS = "GET_KEYWORDS";
const DELETE_KEYWORDS = "DELETE_KEYWORDS";
const ADD_KEYWORDS = "ADD_KEYWORDS";
const CLEAR_KEYWORDS = "CLEAR_KEYWORDS";
const EXPIRE_TOKEN = "EXPIRE_TOKEN";

export const getKeywords = (token, groupId) => async (dispatch) => {
    const result = await newsApi.getKeywords(token, groupId);
    if(result.status === 200) {
        dispatch({ type: GET_KEYWORDS, payload: result.data });
    } else if(result.status === 401) {
        dispatch({ type: EXPIRE_TOKEN });
    } else {
        dispatch({ type: CLEAR_KEYWORDS });
    }
}

export const addKeyword = (token, groupId, data) => async (dispatch) => {
    const result = await newsApi.addKeyword(token, groupId, data);
    if(result.status === 201) {
        alert("저장되었습니다");
        dispatch({ type: ADD_KEYWORDS, payload: {id: result.data, content: data.keyword}})
    } else if(result.status === 401) {
        dispatch({ type: EXPIRE_TOKEN });
    } else {
        dispatch({ type: CLEAR_KEYWORDS });
    }
}

export const delKeyword = (token, groupId, keywordId) => async (dispatch) => {
    const result = await newsApi.delKeyword(token, groupId, keywordId);
    if(result.status === 200) {
        alert("삭제되었습니다");
        dispatch({ type: DELETE_KEYWORDS, payload: { id: keywordId } });
    } else if(result.status === 401) {
        dispatch({ type: EXPIRE_TOKEN });
    } else {
        dispatch({ type: CLEAR_KEYWORDS });
    }
}

export const clearKeywords = () => ({ type: CLEAR_KEYWORDS });

const initialState = [];

export default function keywords(state = initialState, action) {
    switch(action.type) {
        case GET_KEYWORDS:
            return action.payload;
        case DELETE_KEYWORDS:
            return state.filter( s => s.id !== action.payload.id);
        case ADD_KEYWORDS:
            return [...state, action.payload];
        case CLEAR_KEYWORDS:
            return initialState;
        default:
            return state;
    }
}