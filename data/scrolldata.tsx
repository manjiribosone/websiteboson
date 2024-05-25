// // data/data.ts
// interface Block {
//     image: string;
//     title: string;
//     description: string;
//   }
  
//   const blocks: Block[] = [
//     {
//       image: 'https://via.placeholder.com/200',
//       title: 'Block 1',
//       description: 'This is the description for block 1.',
//     },
//     {
//       image: 'https://via.placeholder.com/200',
//       title: 'Block 2',
//       description: 'This is the description for block 2.',
//     },
//     {
//       image: 'https://via.placeholder.com/200',
//       title: 'Block 3',
//       description: 'This is the description for block 3.',
//     },
//     {
//       image: 'https://via.placeholder.com/200',
//       title: 'Block 4',
//       description: 'This is the description for block 4.',
//     },
//     // Add more blocks as needed
//   ];
  
export type Block = {
  image: string;
  title: string;
  description: string;
};

export const blockss: Block[] = [
      {
        image: 'https://via.placeholder.com/200',
        title: 'Block 1',
        description: 'This is the description for block 1.',
      },
      {
        image: 'https://via.placeholder.com/200',
        title: 'Block 2',
        description: 'This is the description for block 2.',
      },
      {
        image: 'https://via.placeholder.com/200',
        title: 'Block 3',
        description: 'This is the description for block 3.',
      },
      {
        image: 'https://via.placeholder.com/200',
        title: 'Block 4',
        description: 'This is the description for block 4.',
      },
      // Add more blocks as needed
    ];

  