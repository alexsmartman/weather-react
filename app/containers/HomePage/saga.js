/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as WeatherApi from 'api/weather';

import { makeSelectCity } from 'containers/HomePage/selectors';

import * as Actions from './actions';
import * as ACTION_TYPES from './constants';

export function* handleGetWeatherByCoordinate(action) {
  try {
    const data = yield call(WeatherApi.getWeatherByCoordinate, action.location);
    yield put(Actions.getWeatherSuccess(data));
  } catch (err) {
    yield put(Actions.getWeatherError(err));
  }
}

export function* handleGetWeatherByCity() {
  const city = yield select(makeSelectCity());
  if (city.trim().length > 0) {
    try {
      const data = yield call(WeatherApi.getWeatherByCity, city);
      yield put(Actions.getWeatherSuccess(data));
    } catch (err) {
      yield put(Actions.getWeatherError(err));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ACTION_TYPES.GET_WEATHER_BY_CITY, handleGetWeatherByCity);
  yield takeLatest(ACTION_TYPES.GET_WEATHER_BY_COORDINATE, handleGetWeatherByCoordinate);
}
