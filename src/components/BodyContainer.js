import styled from 'styled-components';
import React, { } from 'react';
import chainbridge from '../images/chainbridge.jpg';

export const Container = ({children}) => {

  return (
    <StyledBodyContainer>
      <div>{children}</div>
    </StyledBodyContainer>
  );
};

export const Content = styled.div`
  display: flex;
  div:first-child {
    flex: 1;
  }
`;

const StyledBodyContainer = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${chainbridge});
  transition: all 1s;
  display: flex;
  -webkit-background-size: cover!important;
  -moz-background-size: cover!important;
  -o-background-size: cover!important;
  background-size: cover!important;
  background-position:center center;
  background-repeat:no-repeat;
  image-rendering: -webkit-optimize-contrast;
  > div {
    flex: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
  }
`;

export const MiddleAlignContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
`;