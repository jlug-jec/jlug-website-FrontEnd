import React from 'react';
import NewsletterLayout from './NewsletterLayout';
import NewspaperList from './NewspaperList';

// Newsletter Data
const newspapers = [
    {
    id: 1,
    title: 'Edition-1',
    date:'31/07/23',
    thumbnail: 'src/assets/newsletter/1st-edition/Page-1.jpg',
    content: [
      'src/assets/newsletter/1st-edition/Page-1.jpg',
      'src/assets/newsletter/1st-edition/Page-2.jpg',
     
    ],
  },
  {
    id: 2,
    title: 'Edition-2',
    date:'08/08/23',
    thumbnail: 'src/assets/newsletter/2nd-edition/Page-1.jpg',
    content: [
        'src/assets/newsletter/2nd-edition/Page-1.jpg',
        'src/assets/newsletter/2nd-edition/Page-2.jpg',
        'src/assets/newsletter/2nd-edition/Page-3.jpg',
        
    ],
  },
 
//   {
//     id: 3,
//     title: 'Newspaper 3',
//     thumbnail: 'src/assets/newsletter/1st-edition/Page-1.jpg',
//     date:'12/12',
//     content: [
//       'Page 1 content...',
//       'Page 2 content...',
//     ],
// }
];

const Newsletter = () => {
  return (
    <NewsletterLayout>
      <NewspaperList newspapers={newspapers} />
    </NewsletterLayout>
  );
};

export default Newsletter;
