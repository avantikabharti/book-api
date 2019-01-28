import { BOOK_IMAGES } from "./constants";
import { getApiData } from "./action";
import { put, takeLatest, call, select } from "redux-saga/effects";
import { fetchData } from "../../service/api";


function* getData() {
  try {
    const searchTerm = yield select(state => state.global.searchItem)
    const data = yield call(fetchData, searchTerm);
    yield put(getApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export function* catchAction() {
  yield takeLatest(BOOK_IMAGES, getData);
}
