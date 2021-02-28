import React from 'react';
import {ContactContainer, ContactRow} from '../ContactRow';
import bence_animoji from '../../images/bence_animoji.png'
import { MiddleAlignContainer } from '../BodyContainer';
import {Linkedin, Github, DiscordContactRow} from '../Icons';


export const AboutMeModal = (props) => {
  return {
    children: (
      <>
        <p>
          Hey, I'm a Final Year Undergraduate Computer Science student with a goal to become a full-stack software engineer.
          A life long interest in computers and academic experience in programming since Secondary School, I've learned a lot about programming principles,
          techniques and systems architecture. Through out the years I have developed a real passion
          for coding. Currently I am working on side projects, exploring technologies that are new to me and planning on contributing to Open Source software
          in the near future. I always love to have a laugh and discuss innovative ideas.
          
        </p>
        <MiddleAlignContainer>
        <ContactContainer>
          <img src={bence_animoji} alt="Me" />
          <div>
            <DiscordContactRow/>
            <ContactRow href={'https://www.linkedin.com/in/bencegadanyi/'} rel="noreferrer" target="_blank">
              <Linkedin  />  Bence Gadanyi
            </ContactRow>
            <ContactRow href={'https://github.com/Beenyaa'} rel="noreferrer" target="_blank">
              <Github/> Beenyaa
            </ContactRow>
          </div>
        </ContactContainer>
        </MiddleAlignContainer>
      </>
    ),
    title: <>Bence Gadányi</>
  };
}

export const ContactMeModal = (props) => {
  return {
    children: (
      <>
        <form name="contact" netlify>
        <p>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required/>
        </p>
        <p>
          <label for="email">Email</label>
          <input type="text" id="email" name="email" required/>
        </p>
        <p>
          <label for="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </p>
        <p>
          <button class="submit" type="submit"><b>Send</b></button>
        </p>
      </form>
      </>
    ),
    title: <>Get in touch <span role="img" aria-label="Smiling Emoji" alt="Emoji of a smiling face">😁</span></>
  };
}