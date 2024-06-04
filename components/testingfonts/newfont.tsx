import React from 'react'
import styles from './newfont.module.css'


const Newfont = () => {
  return (
    <section className={styles.section}>
    <h1 className={styles.titles}>Main Heading</h1>
    <h2 className={styles.heading}>Main Heading</h2>
    <h3 className={styles.subheading}>Subheading</h3>
    <p className={styles.paragraph}>
      This is a small paragraph providing additional information or context to the reader. It is styled to be easy to read and visually appealing.
    </p>
  </section>
  )
}

export default Newfont