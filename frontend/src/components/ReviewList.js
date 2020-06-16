import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewList = (props) => {
  return (
    <div className="cards row row-cols-1 row-cols-md-4">
      {props.reviews.map((review) => (
        <div className="col md-2">
          <ReviewCard review={review} key={review.id} />
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
