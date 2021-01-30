import styled from 'styled-components';

const AlternativeButton = styled.button`
    width: 100%;
    display: flex;
    height: 36px;
    border-radius: 4px;
    border: 0;
    margin-top: 8px;
    background-color: ${({ backgroundColor }) => (!!backgroundColor && backgroundColor.length > 0 ? backgroundColor : 'rgba(63, 81, 181, 0.2)')};
    color: white;
    font-size: 14px;
    padding-left: 15px;
    justify-content: flex-start;
    align-items: center;
    &:hover{
      background-color: rgba(63, 81, 181, 0.9)
    }
    
  }
`;

export default AlternativeButton;
