import styled from 'styled-components';

const RepositorioArea = styled.div`
  background-color: #110F0D;   
  margin-top: 23px;
  height: 36px;
  border-radius: 4px;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  font-weight: normal;
  line-height: 17px;
  font-size: 14px;
`;

const RepositorioLabel = styled.label`
    margin-left: 15px;   
`;

const RepositorioItem = ({ label }) => (
  <RepositorioArea>
    <RepositorioLabel>
      {label}
    </RepositorioLabel>
  </RepositorioArea>
);

export default RepositorioItem;
