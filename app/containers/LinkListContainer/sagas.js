// import { take, call, put, select } from 'redux-saga/effects';
import { call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { SELECT_TOPIC } from '../NavigationContainer/constants';

function fetchLinksFromServer(topic) {
  return fetch(`http://localhost:3000/api/topics/${topic.name}/links`)
    .then(response => response.json());
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topic);
    // dispatch action to store links
    console.log('LINKS FROM SERVER:', links);
  } catch (e) {
    // dispatch action to store error
  }
}

// Individual exports for testing
export function* defaultSaga() {
  // takeLatest listens on the SELECT_TOPIC event
  // waiting to get fired. When it does, it'll
  // execute the fetchLinks function.
  yield* takeLatest(SELECT_TOPIC, fetchLinks);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
