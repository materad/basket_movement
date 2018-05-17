import { all, fork } from 'redux-saga/effects';
import { watchFetchFakeData } from '../containers/MainPage/MainPage.sagas';

const sagas: any[] = [
  watchFetchFakeData
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
