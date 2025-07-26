import React from 'react';
import NewsletterLayout from './NewsletterLayout';
import NewspaperList from './NewspaperList';

import { Page1_31, Page2_31 } from '../../assets/newsletter/1st-edition';
import { Page1_7, Page2_7, Page3_7 } from '../../assets/newsletter/2nd-edition';
import { Page1_15, Page2_15, Page3_15, Page4_15 } from '../../assets/newsletter/3rd-edition';
import { Page1_22, Page2_22, Page3_22, Page4_22 } from '../../assets/newsletter/4th-edition';
import { Page1_29, Page2_29, Page3_29, Page4_29 } from '../../assets/newsletter/5th-edition';

// Newsletter Data
const newspapers = [
    {
    id: 1,
    title: 'Edition-1',
    date:'31/07/23',
    thumbnail: Page1_31.src,
    content: [
      Page1_31.src,
      Page2_31.src,     
    ],
  },
  {
    id: 2,
    title: 'Edition-2',
    date:'08/08/23',
    thumbnail: Page1_7.src,
    content: [
      Page1_7.src,
      Page2_7.src,
      Page3_7.src,
        
    ],
  },
  {
    id: 3,
    title: 'Edition-3',
    date:'15/08/23',
    thumbnail: Page1_15.src,
    content: [
      Page1_15.src,
      Page2_15.src,
      Page3_15.src,
      Page4_15.src
        
    ],
  },
  {
    id: 4,
    title: 'Edition-4',
    date:'22/08/23',
    thumbnail: Page1_22.src,
    content: [
      Page1_22.src,
      Page2_22.src,
      Page3_22.src,
      Page4_22.src
        
    ],
  },
  {
    id: 5,
    title: 'Edition-5',
    date:'29/08/23',
    thumbnail: Page1_29.src,
    content: [
      Page1_29.src,
      Page2_29.src,
      Page3_29.src,
      Page4_29.src
        
    ],
  }
];

const Newsletter = () => {
  return (
    <NewsletterLayout>
      <NewspaperList newspapers={newspapers} />
    </NewsletterLayout>
  );
};

export default Newsletter;
