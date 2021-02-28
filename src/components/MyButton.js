import React, {useState} from 'react';
import styled from 'styled-components';
import {ContactMeModal, AboutMeModal} from './Modal/Modals'
import {useModalContext} from './Modal/ModalConstructor'

export const AboutMeButton = () => {
  const { openModal } = useModalContext();
    return (
      <>
      <GhostButton onClick={() => openModal(AboutMeModal)}>
        About me
      </GhostButton>
      </>
      )
};

export const ContactMeButton = () => {
    const { openModal } = useModalContext();
    return (
      <>
      <GhostButton onClick={() => openModal(ContactMeModal)}>
        Get in touch
      </GhostButton>
      </>
      )
  };

  export const LanguageSwitch = () => {
    const[isEnglish, setIsEnglish] = useState(true);// english
    if(isEnglish){
      return <GhostButton onClick={()=> setIsEnglish(false)}>Language: <span role="img" aria-label="United Kingdom Flag" alt="Emoji of the United Kingdom flag">
      🇬🇧
    </span></GhostButton>;
    }
    else{
      return <GhostButton onClick={()=> setIsEnglish(true)}>Language: <span role="img" aria-label="Hungary Flag" alt="Emoji of the Hungarian flag">
      🇭🇺 
    </span> </GhostButton>;
    }
  };

export const GhostButton = styled.button`
  background: transparent;
  font-size: inherit;
  font-family: inherit;
  border: none;
  cursor: pointer;
  outline; none;
  color: white;
  &:focus {
    outline: 0 !important;
}
&:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 3px;
  left: 50%;
  position: relative;
  background: #9adfb0;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
&:hover:after { 
  width: 100%; 
  left: 0; 
}
`;