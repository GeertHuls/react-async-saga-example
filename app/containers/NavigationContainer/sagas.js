// import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_TOPICS } from './constants';
import { takeLatest } from 'redux-saga';
import { call } from 'redux-saga/effects';

export function fetchTopicsFromServer() {
  return fetch('http://locahost:3000/api/topics')
    .then(response => response.json());
}

// Generator functions: do async logic without
// using callbacks.
function* fetchTopics() {
  const topics = yield call(fetchTopicsFromServer);
  console.log('Topics from server: ', topics);
}

export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
];
