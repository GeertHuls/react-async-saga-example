// import { take, call, put, select } from 'redux-saga/effects';
import { ADD_LINK } from './constants';
import { takeLatest } from 'redux-saga';
import { call } from 'redux-saga/effects';
import { createLink } from '../../api';


function* addLink(action) {
  try {
    yield call(createLink, action.link);
  } catch (e) {
  }
}

export function* addLinkSaga() {
  yield takeLatest(ADD_LINK, addLink);
}

// All sagas to be loaded
export default [
  addLinkSaga,
];
