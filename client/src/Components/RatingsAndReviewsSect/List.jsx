import React from 'react';

import ReviewListEntry from './ReviewListEntry.jsx';
import styles from './reviews.module.css';

let List = ({reviewList}) => {
  return (
    reviewList.map(review => {
      return <ReviewListEntry review={review} key={review.review_id} />
    })
  );
};

export default List;
