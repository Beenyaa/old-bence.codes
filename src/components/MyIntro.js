import styled from 'styled-components';

export const IntroContainer = styled.div`
display: flex;
  flex-flow: row wrap;
  align-items: center;
  @media (max-width: 1340px) {
    justify-content: center;
    align-content: center;
    align-items: flex-start;
  }
`;

export const Separator = styled.div`
border: 0.2px solid white;
height: 100px;
margin-left: 10px;
margin-right: 10px;

@media (max-width: 1340px) {
    height: 0px;
    margin-left: 0px;
    margin-right: 0px;
    width: 80%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
