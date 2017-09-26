/**
*
* CitiesList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import City from '../City';


class CitiesList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        {this.props.cities.map((city, index) => (
          <City
            key={index}
            city={city}
            index={index}
            onRemove={this.props.onRemove}
          />
        ))
        }
      </div>
    );
  }
}

CitiesList.propTypes = {
  cities: PropTypes.array,
  onRemove: PropTypes.func,
};

export default CitiesList;
