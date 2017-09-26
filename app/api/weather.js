import request from 'utils/request';

const key = 'd58ed80c18b9f5243ede6a35ad37a75a';
const units = 'metric';
const url = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByCity = (city) =>
  request(`${url}?q=${city}&APPID=${key}&units=${units}`, {
    method: 'GET',
  });

export const getWeatherByCoordinate = (coordinate) =>
  request(`${url}?lat=${coordinate.lat}&lon=${coordinate.lng}&APPID=${key}&units=${units}`, {
    method: 'GET',
  });
