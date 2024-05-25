// blockData.ts
export interface BlockProps {
    imageSrc: string;
    title: string;
    description: string;
  }
  
  export const blocks: BlockProps[] = [
    {
      imageSrc: '/path/to/image1.jpg',
      title: 'Title 1',
      description: 'This is the description for block 1.',
    },
    {
      imageSrc: '/path/to/image2.jpg',
      title: 'Title 2',
      description: 'This is the description for block 2.',
    },
    {
      imageSrc: '/path/to/image3.jpg',
      title: 'Title 3',
      description: 'This is the description for block 3.',
    },
    // Add more blocks as needed
  ];
  