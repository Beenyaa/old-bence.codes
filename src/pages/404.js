import React from "react"
import "../scss/style.scss"
import SEO from "../components/Seo"
import {MyTitle, MySubtitle} from "../components/MyTitle"
import {IntroContainer, Separator} from "../components/MyIntro"
import {MiddleAlignContainer } from '../components/BodyContainer';
import {ContainerRow} from '../components/ContainerRow';
import styled from 'styled-components';
import {Link} from 'gatsby'

const PageConstruct = () => {
  return(
  <>
  <SEO />
  <Background>
    <ContainerRow large>
      <MiddleAlignContainer>
          <IntroContainer>
            <MyTitle>404</MyTitle>
            <Separator/>
              <MySubtitle>The page you are looking for doesn't exist{' '}
                <span role="img" aria-label="Dizzy Face" alt="Emoji of a dizzy face">
                😵
                </span>
              </MySubtitle>
          </IntroContainer>
          <br/>
            <div>
              <b>
                <p>
                  <StyledLink to="/">
                    <i class='fas fa-arrow-left'></i>{' '}
                    Back to Home
                  </StyledLink>
                </p>
              </b>
        </div>
      </MiddleAlignContainer>
      </ContainerRow>
    </Background>
  </>
    )
  }

const Background = styled.div`
  background: #E90A33;
  height: 100%;
  width: 100%;
  transition: all 1s;
  display: flex;
  > div {
    flex: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
  }
`

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.15em;

  display: inline-block;
  padding: 15px 20px;
  position: relative;
  &:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 3px;
    left: 50%;
    position: absolute;
    background: #9adfb0;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after { 
    width: 100%; 
    left: 0; 
  }
`;
  
  export default PageConstruct

