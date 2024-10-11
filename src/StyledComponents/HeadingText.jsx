import styled from 'styled-components';

const Heading = styled.div`
  background: linear-gradient(to right, #00dfd8, #007cf0);
  color: transparent;
  display: inline-block;
  background-clip: text;
  text-transform: uppercase;
  text-align: center;
  font-size: ${(prop) => prop.fontSize || '2rem'};
`;

export default Heading;
