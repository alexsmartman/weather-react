/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_WEATHER_BY_CITY = 'app/HomePage/GET_WEATHER_BY_CITY';
export const GET_WEATHER_BY_COORDINATE = 'app/HomePage/GET_WEATHER_BY_COORDINATE';
export const GET_WEATHER_SUCCESS = 'app/HomePage/GET_WEATHER_SUCCESS';
export const GET_WEATHER_ERROR = 'app/HomePage/GET_WEATHER_ERROR';

export const CHANGE_CITY = 'app/HomePage/CHANGE_CITY';
export const REMOVE_CITY = 'app/HomePage/REMOVE_CITY';
export const RESTORE_FROM_LOCAL_STORAGE = 'app/HomePage/RESTORE_FROM_LOCAL_STORAGE';
