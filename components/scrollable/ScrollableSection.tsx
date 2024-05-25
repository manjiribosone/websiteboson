// components/ScrollableSection.tsx
import React from 'react';
import styles from './ScrollableSection.module.css';


interface Block {
  image: string;
  title: string;
  description: string;
}

interface ScrollableSectionProps {
  heading: string;
  blocks: Block[];
}

const ScrollableSection: React.FC<ScrollableSectionProps> = ({ heading, blocks }) => {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.blocksContainer}>
        {blocks.map((block, index) => (
          <div key={index} className={styles.block}>
            <img src={block.image} alt={block.title} className={styles.image} />
            <h3 className={styles.title}>{block.title}</h3>
            <p className={styles.description}>{block.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableSection;
