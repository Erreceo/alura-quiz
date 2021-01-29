import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import Widget from '../Widget';

const LoaderArea = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoadingWidget = () => (
  <Widget>
    <Widget.Header>Carregando...</Widget.Header>
    <Widget.Content>
      <LoaderArea>
        <CircularProgress />
      </LoaderArea>
    </Widget.Content>
  </Widget>
);

export default LoadingWidget;
