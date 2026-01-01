'use client';

import styles from './page.module.scss';
import AnimatedText from './components/AnimatedText';
import Cursor from './components/Cursor';


export default function Home() {

  return (
    <main className={styles.page}>
      <Cursor/>
      <AnimatedText text="VGOA"/>
    </main>
  );
}