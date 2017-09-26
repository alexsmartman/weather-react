/**
 * Homepage selectors
 */
/*
import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

const makeSelectCity = () => createSelector(
  selectHome,
  (homeState) => homeState.get('city')
);


const makeSelectWeather = () => createSelector(
  selectHome,
  (homeState) => homeState.get('data')
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectWeather,
  makeSelectCity,
};
*/

import { createSelector } from 'reselect';

export const selectHome = () => (state) => state.get('home');

export const makeSelectHomePage = () => createSelector(
  selectHome(),
  (substate) => substate.toJS()
);

export const makeSelectCity = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('city')
);

export default makeSelectHomePage;
