import { useState } from "react";

const Component4 = () => {
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const arrayOfStar = ['⭐', '⭐', '⭐', '⭐', '⭐'];

  const handleStarClick = (index) => {
    if (!isSubmitted) {
      // Allow rating only if it's not submitted
      setRating(index + 1); // Set the rating (index + 1 stars)
    }
  };

  return (
    <div>
      {arrayOfStar.map((star, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          style={{ cursor: isSubmitted ? "default" : "pointer" }}
        >
          {star}
        </span>
      ))}
      <br />
      <p>Rating: {rating}</p>
      <button onClick={() => setIsSubmitted(true)}>Submit Rating</button>
    </div>
  );
};

export default Component4;
