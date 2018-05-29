import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchFakeDataSucess, IMainViewportFetchFakeDataSucess, } from './MainViewport.actions';
import { MainViewportConstants } from './MainViewport.constants';

export function* fetchData(action: IMainViewportFetchFakeDataSucess) {
  const { data } = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts/1', action.payload);
  yield put(fetchFakeDataSucess(data));
}

export function* watchFetchFakeData() {
  yield takeLatest(MainViewportConstants.FETCH_FAKE_DATA, fetchData);
}