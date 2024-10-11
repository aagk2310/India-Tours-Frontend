import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: #333;
`;

const ButtonBase = styled.button`
  font-size: 1rem;
  padding: 0.7rem 0.15rem;
  border-radius: 0.5rem;
  background-color: #855cff;
  color: #fff;
  text-transform: uppercase;
  display: inline-block;
  text-decoration: none;
  position: relative;
  transition: all 0.4s;
  backface-visibility: hidden;
  border-radius: 1.5rem;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: center;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

// Primary Button specific styles
export const ButtonPrimary = styled(ButtonBase)`
  width: 18%;
  font-family: 'Lato', sans-serif;
  font-weight: 400;

  color: #000;
  background-color: #fff;
  line-height: 1rem;
  box-sizing: border-box;
  transition: color 0.5s, background-color 0.5s,
    border 0.5s font-weight 0.5s ease;

  &:hover {
    background-color: #413543;
    color: #fff;
    border: 0.1rem solid white;
    font-weight: 700;
  }

  @media only screen and (max-width: 600px) {
    width: 40%;
    letter-spacing: 0.2rem;
    font-size: 1rem;
  }
`;

// Secondary Button specific styles
export const ButtonSecondary = styled(ButtonBase)`
  width: ${(prop) => prop.width || '50%'};
  height: 40%;
  font-size: 0.7rem;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    letter-spacing: 0.2rem;
    font-size: 1.5rem;
  }
`;
