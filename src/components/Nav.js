import React from "react"
import {ModalProvider} from './Modal/ModalConstructor'
import {AboutMeButton, ContactMeButton, LanguageSwitch} from "./MyButton"
import styled from 'styled-components';

export const CustomNav = styled.div`
  display: flex; 
  font-family: inherit;
  flex-flow: column wrap; 
  align-content: space-between;
`;

const Navigation = () => {
    return (
      <ModalProvider>
        <nav>
            <AboutMeButton/>
        </nav>
    </ModalProvider>
  )

//   return (
//     <ModalProvider>
//       <nav>
//           <AboutMeButton/>
//           <ContactMeButton/>
//       </nav>
//   </ModalProvider>
// )
}

export default Navigation
