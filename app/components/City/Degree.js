import styled from 'styled-components';

const Degree = styled.div`
  font-size: 24px;
  color: ${props => props.t > 0 ? '#f96868' : '#00acec'};
`;

export default Degree;
