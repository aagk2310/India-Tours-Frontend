import styled from 'styled-components';

// const ImageComponent=styled.img`
// img`
export const ImageContainerDiv = styled.div`
  overflow: hidden;
  height: ${(prop) => prop.height || '100%'};
  width: ${(prop) => prop.width || 'auto'};
`;
export const ImgStyledComponent = styled.img`
  /* background-image: ${({ img, overlay }) =>
    overlay
      ? `linear-gradient(to right, rgba(134, 93, 255, 0.8), rgba(151, 222, 255, 0.8)), url('${img}')`
      : `url('${img}')`}; */
  object-fit: ${(prop) => prop.objectFit || 'cover'};
  height: 100%;
  width: 100%;
  margin: auto;
  /* background-size: cover;
  background-position: center; */
`;
