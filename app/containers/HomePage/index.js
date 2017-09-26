/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import FontAwesome from 'react-fontawesome';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import H2 from 'components/H2';
import CitiesList from 'components/CitiesList';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Arrow from './Arrow';
import Section from './Section';
import { getWeatherByCity, getWeatherByCoordinate, changeCity, removeCity, restoreFromLocalStorage } from './actions';
import { makeSelectHomePage } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    this.getInicialWeather();
  }

  // Если в localStorage данных нет, то запрашиваем текущую геопозицию
  getInicialWeather = () => {
    if (localStorage.getItem('cities') && localStorage.getItem('cities').indexOf('coord') !== -1) {
      this.props.restoreFromLocalStorage();
    } else {
      navigator.geolocation.getCurrentPosition(this.getCurrentWeather);
    }
  };

  getCurrentWeather = (position) => {
    this.props.getWeatherByCoordinate({ lat: position.coords.latitude, lng: position.coords.longitude });
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Weather application homepage" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage id="home.appTitle" />
            </H2>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="city">
                <Input
                  type="text"
                  placeholder="Show me weather in..."
                  value={this.props.HomePage.city}
                  onChange={this.props.onChangeCity}
                />
                <Arrow
                  city={this.props.HomePage.city}
                >
                  <FontAwesome
                    name="chevron-right"
                    onClick={this.props.onSubmitForm}
                  />
                </Arrow>
              </label>
            </Form>
          </CenteredSection>
          <Section>
            <CitiesList
              cities={this.props.HomePage.cities}
              onRemove={this.props.removeCity}
            />
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  HomePage: PropTypes.object,
  onSubmitForm: PropTypes.func,
  onChangeCity: PropTypes.func,
  getWeatherByCoordinate: PropTypes.func,
  removeCity: PropTypes.func,
  restoreFromLocalStorage: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeCity: (evt) => dispatch(changeCity(evt.target.value)),
    getWeatherByCoordinate: (location) => dispatch(getWeatherByCoordinate(location)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(getWeatherByCity());
    },
    removeCity: (index) => dispatch(removeCity(index)),
    restoreFromLocalStorage: () => dispatch(restoreFromLocalStorage()),
  };
}

const mapStateToProps = createStructuredSelector({
  // error: makeSelectError(),
  HomePage: makeSelectHomePage(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
