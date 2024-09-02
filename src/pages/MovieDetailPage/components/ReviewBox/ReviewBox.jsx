import React, { useState } from "react";
import "./ReviewBox.style.css";
const ReviewBox = ({ review }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="review-box">
      <h5 className="fw-bold">{review.author}</h5>
      <p className={`text-box ${expanded ? "expanded" : "fold"}`}>
        {review.content}
      </p>
      {review.content.length > 680 ? (
        <button className="more-button" onClick={() => setExpanded(!expanded)}>
          {expanded ? "접기" : "더보기"}
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ReviewBox;
