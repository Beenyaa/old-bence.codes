import React, { useState } from "react"
import Navigation from "../components/Nav"
import "../scss/style.scss"
import SEO from "../components/Seo"
import {MyTitle, MySubtitle} from "../components/MyTitle"
import {IntroContainer, Separator} from "../components/MyIntro"
import { Container, MiddleAlignContainer } from '../components/BodyContainer';
import {ContainerRow} from '../components/ContainerRow';

const PageConstruct = () => {
  return(
    <>
      <SEO />
      <Container>
        <ContainerRow>
          <Navigation/>
        </ContainerRow>
        <ContainerRow large>
          <MiddleAlignContainer>
              <IntroContainer>
                <MyTitle>Bence Gadányi</MyTitle>
                <Separator/>
                  <MySubtitle>An aspiring full-stack software engineer from Hungary{' '}
                    <span role="img" aria-label="Hungary Flag" alt="Emoji of the Hungarian flag">
                      🇭🇺 
                    </span>{' '}
                    based in the UK{' '}
                    <span role="img" aria-label="United Kingdom Flag" alt="Emoji of the United Kingdom flag">
                      🇬🇧
                    </span>
                  </MySubtitle>
              </IntroContainer>
              <br/>
              <div>
              <b>
              <p>
                There is still more to come, stay tuned!{' '}
                <span role="img" aria-label="Peace Hand Gesture" alt="Emoji of a peace sign">
                  ✌️
                </span>
                <span role="img" aria-label="Smiling Emoji" alt="Emoji of a smiling face">
                  😁
                </span>
              </p>
              </b>
            </div>
          </MiddleAlignContainer>
        </ContainerRow>
        <ContainerRow>
          <MiddleAlignContainer>
            <div>
              <p>
              developer/consultant @<b><a class="external-frontpage" href="https://www.netcompany.com" rel="noreferrer" target="_blank">netcompany</a></b>
              </p>
            </div>
          </MiddleAlignContainer>
        </ContainerRow>
      </Container>
    </>
  )
  
}

export default function Home() {
  return PageConstruct()
}
