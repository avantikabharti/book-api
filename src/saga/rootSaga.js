import { all } from "redux-saga/effects";
import { catchAction } from "../containers/BookApp/saga";

export default function* rootSaga() {
  yield all([
    catchAction()
  ]);
}
