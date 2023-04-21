import React, { useEffect } from 'react';
import './App.css';
import withLoading from "../src/Components/HOC"
import LoadingAnimation from './Components/LoadingAnimation';
import HomePage from './Components/HomePage';
function App(props) {
  const { isLoading, startLoading, stopLoading } = props;
  useEffect(() => {
    setTimeout(() => {
      props.stopLoading()
    }, 5000)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? <LoadingAnimation />
          : <HomePage />}
      </header>
    </div>
  );
}

export default withLoading(App);
