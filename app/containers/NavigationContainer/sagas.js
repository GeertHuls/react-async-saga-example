// import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_TOPICS, SELECT_TOPIC } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';

export function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics')
    .then(response => response.json());
}

// Generator functions: do async logic without
// using callbacks.
function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceeded(topics));
  } catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

function* pushTopic(action) {
  // in here we will write logic to change the url
  // for the relevant topic.
  console.log(action);
}

export function* pushTopicSaga() {
  // takeLatest listens on the SELECT_TOPIC event
  // waiting to get fired. When it does, it'll
  // execute the fetchLinks function.
  yield* takeLatest(SELECT_TOPIC, pushTopic);
}

export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
  pushTopicSaga,
];
