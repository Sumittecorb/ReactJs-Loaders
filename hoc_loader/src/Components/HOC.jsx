import React, { useState } from 'react'

function withLoading(Component) {
  return function WithLoading(props) {
    const [isLoading, setLoading] = useState(true);

    function startLoading() {
      setLoading(true);
    }

    function stopLoading() {
      setLoading(false);
    }

    return (
      <Component
        {...props}
        isLoading={isLoading}
        startLoading={startLoading}
        stopLoading={stopLoading}
        setLoading={setLoading}
      />
    );
  };
}
export default withLoading;