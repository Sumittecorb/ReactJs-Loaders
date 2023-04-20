import React, { useState } from "react";
import "../../src/App.css";

const SquareLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="loader">
      {isLoading ? (
        <div className="box"></div>
      ) : (
        <button onClick={() => setIsLoading(true)}>Load Content</button>
      )}
    </div>
  );
};

export default SquareLoader;
