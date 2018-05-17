import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchFakeDataSucess, IMainPageFetchFakeDataSucess, } from './MainPage.actions';
import { MainPageConstants } from './MainPage.constants';

export function* fetchData(action: IMainPageFetchFakeDataSucess) {
  const { data } = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts/1', action.payload);
  yield put(fetchFakeDataSucess(data));
}

export function* watchFetchFakeData() {
  yield takeLatest(MainPageConstants.FETCH_FAKE_DATA, fetchData);
}