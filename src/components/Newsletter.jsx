import React from 'react';
import NewsletterLayout from './NewsletterLayout';
import NewspaperList from './NewspaperList';

import { Page1_7, Page2_7, Page3_7 } from '../assets/newsletter/2nd-edition';
import { Page1_31, Page2_31 } from '../assets/newsletter/1st-edition';

// Newsletter Data
const newspapers = [
    {
    id: 1,
    title: 'Edition-1',
    date:'31/07/23',
    thumbnail: Page1_31,
    content: [
      Page1_31,
      Page2_31,     
    ],
  },
  {
    id: 2,
    title: 'Edition-2',
    date:'08/08/23',
    thumbnail: Page1_7,
    content: [
      Page1_7,
      Page2_7,
      Page3_7,
        
    ],
  },
];

const Newsletter = () => {
  return (
    <NewsletterLayout>
      <NewspaperList newspapers={newspapers} />
    </NewsletterLayout>
  );
};

export default Newsletter;
