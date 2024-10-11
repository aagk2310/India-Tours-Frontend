import styled from 'styled-components';

const CircularButton = styled.button`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: #855cff;
  border: 0px;
  font-weight: 700;

  &:hover {
    background-color: #a58aff;
  }
`;

export default CircularButton;
