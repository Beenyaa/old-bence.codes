import React from 'react';
import styled from 'styled-components';

export const ContainerRow = ({children, large = false}) => {
  if (large) {
    return <LargeRow>{children}</LargeRow>;
  }
  return <RegularRow>{children}</RegularRow>;
};

const LargeRow = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const RegularRow = styled.div``;