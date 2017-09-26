/**
 * Homepage selectors
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
