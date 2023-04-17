import React, { useState } from "react";
import "../../src/App.css";

const SquareLoader = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="square-loader">
      {isLoading ? (
        <div className="square-loader__animation"></div>
      ) : (
        <button onClick={() => setIsLoading(true)}>Load Content</button>
      )}
    </div>
  );
};

export default SquareLoader;
