import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import member from "./member";
import members from "./members";
import token from "./token";
import group from "./group";
import keywords from "./keywords";
import news from "./news";
import schedules from "./schedules";
import schedule from "./schedule";
import absences from "./absences";
import absence from "./absence";
import purchases from "./purchases";
import purchase from "./purchase";
import notices from "./notices";
import notice from "./notice";
import groupmember from "./manage";
import etfs from "./etfs";
import etf from "./etf";

const rootReducer = combineReducers({
  etf,
  etfs,
  token,
  members,
  member,
  group,
  keywords,
  news,
  schedules,
  schedule,
  absences,
  absence,
  purchases,
  purchase,
  notices,
  notice,
  groupmember
});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
