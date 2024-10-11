import styled from 'styled-components';

const FormComponent = styled.form`
  display: inline-block;
  height: ${(prop) => prop.height || 'auto'};
  width: ${(prop) => prop.width || 'auto'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 4%;
`;
export default FormComponent;
