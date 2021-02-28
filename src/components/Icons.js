import React, {useState} from 'react';
import github from '../images/github.png'
import discord from '../images/discord.png'
import linkedin from '../images/linkedin.png'
import {ContactRow} from './ContactRow';

export const Linkedin = () => {
    return <img src={linkedin} alt="LinkedIn Logo" />;
  };

const Discord = () => {
  return <img alt={'Discord Logo'} src={discord} />;
};

export const Github = () => {
  return <img src={github} alt="GitHub Logo" />;
};

export const DiscordContactRow = () => {
    const [message, setMessage] = useState('Beenyaa#9751');
  
    const copy = async () => {
      await navigator.clipboard.writeText('Beenyaa#9751');
      setMessage('Copied ✔');
      await new Promise((r) => setTimeout(r, 1750));
      setMessage('Beenyaa#9751');
    };
  
    return (
      <ContactRow href={'#'} onClick={copy}>
        <Discord /> {message}
      </ContactRow>
    );
  };