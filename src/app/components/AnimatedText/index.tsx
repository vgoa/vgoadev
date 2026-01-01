
'use client'

import styles from './styles.module.scss';

import { useState, useEffect } from 'react';

interface TextProps {
  text: string;
}


const splitText = (text: string) => {
  return text.split('').map((char, index) => (
    <span key={index} className = { index === 0 ? styles.visible : styles.hidden}>
      {char}
    </span>
  ));
};


export default function AnimatedText({ text }: TextProps) {

return (
	<div>
		{splitText(text)}
	</div>
	);
}