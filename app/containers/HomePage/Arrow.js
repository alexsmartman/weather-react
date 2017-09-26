import styled from 'styled-components';

const Button = styled.a`
  color: #bdbdbd;;
  cursor: pointer;
  opacity: ${props => props.city ? 1 : 0};

  &:hover {
    color: #757575;
  }
`;

export default Button;
