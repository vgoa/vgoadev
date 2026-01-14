
'use client'

import styles from './styles.module.scss';

import { useState, useEffect } from 'react';

interface TextProps {
  text: string;
}

const SplitText = (text: string) => {
  
  useEffect(() => {
    const spans = document.querySelectorAll(`.${styles.hidden}`);
    spans.forEach((span, index) => {
      if (index === 0) {
       setTimeout(() => {
          span.classList.remove(styles.hidden);
          span.classList.add(styles.visible);
        }, 1500);
      } else {
        index += 1; // Adjust index for delay calculation
        setTimeout(() => {
          span.classList.remove(styles.hidden);
          span.classList.add(styles.visible);
        }, index * 1500); // Delay based on index
      }
    });
  }, [text]);

  return text.split('').map((char, index) => (
      <span key={index} className = { index === 0 ? styles.visible : styles.hidden}>
        {char}
      </span>
  ));
};


export default function AnimatedText({ text }: TextProps) {

return (
	<div className={styles.animatedTextContainer}>
		{SplitText(text)}
	</div>
	);
}