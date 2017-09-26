/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import * as ACTION_TYPES from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */

export function changeCity(city) {
  return {
    type: ACTION_TYPES.CHANGE_CITY,
    city,
  };
}

export function getWeatherByCoordinate(location) {
  return {
    type: ACTION_TYPES.GET_WEATHER_BY_COORDINATE,
    location,
  };
}

export function getWeatherByCity() {
  return {
    type: ACTION_TYPES.GET_WEATHER_BY_CITY,
  };
}

export function getWeatherSuccess(city = {}) {
  return {
    type: ACTION_TYPES.GET_WEATHER_SUCCESS,
    city,
  };
}

export function getWeatherError(error = { data: '' }) {
  return {
    type: ACTION_TYPES.GET_WEATHER_ERROR,
    ...error,
  };
}

export function removeCity(index) {
  return {
    type: ACTION_TYPES.REMOVE_CITY,
    index,
  };
}

export function restoreFromLocalStorage() {
  return {
    type: ACTION_TYPES.RESTORE_FROM_LOCAL_STORAGE,
  };
}
