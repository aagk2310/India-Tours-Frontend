import styled from 'styled-components';

const DivWithEqualSpace = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'column'};
  align-items: center;
  justify-content: space-between;
  width: ${(prop) => prop.width || 'auto'};
  height: ${(prop) => prop.height || 'auto'};
  border-radius: ${(prop) => prop.borderRadius || '0'};
  background-color: ${(prop) => prop.backgroundColor || 'white'};
  padding: ${(prop) => prop.padding || '0 0 0 0'};
  margin: ${(prop) => prop.margin || '0px 0px 0px 0px'};
  background: ${(prop) => prop.background || 'white'};
  border: ${(prop) => prop.border || '0'};
`;

export default DivWithEqualSpace;
