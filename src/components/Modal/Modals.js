import React, {useState} from 'react';
import {ContactContainer, ContactRow} from '../ContactRow';
import bence from '../../images/me.JPG'
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
          <img src={bence} alt="Me" />
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
  const [formState, setFormState] = useState({
    name:"",
    email:"",
    message:"",
  })

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = e => {

    if(formState.name.length>1 && formState.email.length>1 && formState.message.length>1){

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formState })
      })
        .then(() => console.log("Success!"))
        .catch(error => console.log(error));
    }

    e.preventDefault();
    
  };

  const handleChange = e => setFormState({ ...formState, [e.target.name]: e.target.value });

  return {
    children: (
      <>
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact"/>
        <p>
          <label for="name">Name</label>
          <input 
           type="text"
           id="name"
           name="name" 
           value={formState.name} 
           onChange={handleChange} 
           placeholder="Enter your name" 
           required/>
        </p>
        <p>
          <label for="email">Email</label>
          <input 
          type="text" 
          id="email" 
          name="email" 
          value={formState.email} 
          onChange={handleChange} 
          placeholder="Enter your email" 
          required/>
        </p>
        <p>
          <label for="message">Message</label>
          <textarea 
          id="message" 
          name="message" 
          value={formState.message} 
          onChange={handleChange} 
          placeholder="Enter your message 😁" 
          required/>
        </p>
        <p>
          <button class="submit" type="submit" onClick={handleSubmit}><b>Send</b></button>
        </p>
      </form>
      </>
    ),
    title: <>Get in touch <span role="img" aria-label="Smiling Emoji" alt="Emoji of a smiling face">😁</span></>
  };
}