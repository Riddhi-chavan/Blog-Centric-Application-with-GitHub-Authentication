export const dynamic  = 'force-static'
import type { Metadata } from 'next'
import styles from './About.module.css'


export const metadata: Metadata = {
    title: 'About Title',
    description: 'helo About page',
  }

export default async function About() {
    return(
    <div className={styles.title}>
    <h1 className={styles.page}>About</h1>
    <p>welcome to About page</p>
    </div>
    );
}