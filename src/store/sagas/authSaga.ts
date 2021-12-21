import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../slices/authSlice';

import api, { setAuthorization } from '../../services/api';

type LoginParams = {
  payload: {
    email: string;
    password: string;
    successCallback: Function;
    failureCallback: Function;
  };
};

function* login({
  payload: { email, password, successCallback = () => {}, failureCallback = () => {} }
}: LoginParams) {
  try {
    const response: AxiosResponse = yield call(api.post, '/login/admin', { email, password });

    const {
      data: { user, permissions, token }
    } = response;

    setAuthorization(token);

    yield put(LOGIN_SUCCESS({ ...user, permissions, token }));
    // localStorage.setItem('@basfagro-admin/credentials', JSON.stringify({ email, password }));

    successCallback();
  } catch (error) {
    yield put(LOGIN_FAILURE({ error }));
    failureCallback();
  }
}

function* logout({ payload: { successCallback = () => {} } }: LoginParams) {
  try {
    yield put(LOGOUT_SUCCESS());
    successCallback();
  } catch (error) {
    yield put(LOGOUT_FAILURE({ error }));
  }
}

export default function* watcher() {
  yield takeEvery(LOGIN, login);
  yield takeEvery(LOGOUT, logout);
}
