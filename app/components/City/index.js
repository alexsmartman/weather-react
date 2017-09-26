/**
*
* City
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import Wrapper from './Wrapper';
import Cross from './Cross';
import Degree from './Degree';
// import styled from 'styled-components';


class City extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  handleRemoveCity = () => {
    this.props.onRemove(this.props.index);
  };

  render() {
    return (
      <Wrapper>
        <div>
          {this.props.city.name}, {this.props.city.sys.country}
        </div>
        <Degree
          t={this.props.city.main.temp}
        >
          {Math.round(this.props.city.main.temp)}
        </Degree>
        <Cross>
          <FontAwesome
            name="close"
            onClick={this.handleRemoveCity}
          />
        </Cross>
      </Wrapper>
    );
  }
}

City.propTypes = {
  city: PropTypes.object,
  index: PropTypes.number,
  onRemove: PropTypes.func,
};

export default City;
