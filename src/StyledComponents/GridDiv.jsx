import styled from 'styled-components';

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns || '1fr'};
  grid-template-rows: ${(props) => props.rows || '1fr'};
  clip-path: ${(props) => props.clipPath || none};
  width: ${(prop) => prop.width || '100%'};
  height: ${(prop) => prop.height || '100%'};
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 3vw;
    clip-path: none;
    height: 20%;
    width: 80%;
  }
`;

export default GridDiv;
