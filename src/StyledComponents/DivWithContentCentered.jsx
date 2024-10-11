import styled from 'styled-components';

const DivWithContentCentered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: ${(prop) => prop.rowGap || 'auto'};
  /* column-gap: ${(prop) => prop.colGap || 'auto'};
  width: ${(prop) => prop.width || 'auto'}; */
  height: ${(prop) => prop.height || 'auto'};
  width: ${(prop) => prop.width || '100%'};
  border-radius: ${(prop) => prop.borderRadius || '0'};
  background-color: ${(prop) => prop.backgroundColor || '#f7f7f7'};
  padding: ${(prop) => prop.padding || '0 0 0 0'};
  margin: ${(prop) => prop.margin || '0px 0px 0px 0px'};
  border-bottom: ${(prop) => prop.borderBottom || '0'};
`;

export default DivWithContentCentered;
