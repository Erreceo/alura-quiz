import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  background-color: ${({ disabled }) => (disabled ? '#8C8C8C' : '#FF9800')};
  height: 36px;
  margin-top: 24px;
  border: 0;
  border-radius: 4px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  disabled: ${({ disabled }) => disabled};
  color: white;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  transition: background-color 0.2s linear;
`;
export default Button;
