import { useEffect, useState } from "react";

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  const handleLike = () => {
    setHasLiked(!hasLiked);
  };

  const counter = () => {
    setCount(count + 1);
  };

  return (
    <div className="card" onClick={() => counter()}>
      <h2>
        {title}
        <br />
        {count ? (
          <p className="counter">
            Count: <span>{count}</span>
          </p>
        ) : null}
      </h2>
      <button className="btn" onClick={() => handleLike()}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default Card;
