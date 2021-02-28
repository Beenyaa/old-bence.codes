import styled from 'styled-components';

export const MyTitle = styled.h1`
  text-align: center;
  margin: 0px;
  font-size: 450%;
  letter-spacing: -2px;
  color: black;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
  @supports (-webkit-text-stroke: 1px white) {
    color: transparent;
    text-shadow: none;
    text-stroke: 2px white;
    -webkit-text-stroke: 2px white;
  }
  @media (max-width: 760px) {
    font-size: 350%;
  }
  @media (max-width: 375px) {
    font-size: 270%;
  }
`;

export const MySubtitle = styled.h2`
  text-align: center;
  margin: 0px;
  font-size: 18.72px;
  @media (max-width: 760px) {
    font-size 14.72px;
  }
  @media (max-width: 375px) {
    font-size: 12.72px;
  }
`;