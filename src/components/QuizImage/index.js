import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  src: ${(src) => src};
  alt: ${(alt) => alt};
`;
export default Image;
