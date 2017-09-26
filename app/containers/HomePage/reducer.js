/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import * as ACTION_TYPES from './constants';

// The initial state of the App
const initialState = fromJS({
  city: '',
  cities: [],
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_CITY:
      return state
        .set('city', action.city);
    case ACTION_TYPES.GET_WEATHER_SUCCESS:
      return state
        .updateIn(['cities'], (currentCities) => {
          const cities = currentCities.toJS();
          cities.push(action.city);
          localStorage.setItem('cities', JSON.stringify(cities));
          return fromJS(cities);
        })
        .set('city', '');
    case ACTION_TYPES.REMOVE_CITY: {
      const cities = state.get('cities').toJS();
      cities.splice(action.index, 1);
      localStorage.setItem('cities', JSON.stringify(cities));
      return state.deleteIn(['cities', action.index]);
    }

    case ACTION_TYPES.RESTORE_FROM_LOCAL_STORAGE:
      return state
        .updateIn(['cities'], () => fromJS(JSON.parse(localStorage.cities)));
    default:
      return state;
  }
}

export default homeReducer;
