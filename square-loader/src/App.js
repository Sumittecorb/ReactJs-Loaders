import { useEffect, useState } from 'react';
import './App.css';
import SquareLoader from './Components/loader';
function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isLoading ?
        <div className='header'>
          <SquareLoader />
        </div>
        :
        <div>
          <div className="card">
            <div className='card-image'>
              <img src="https://picsum.photos/300/200" alt="alt" />
            </div>
            <h2>lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, accusamus? Minima temporibus quibusdam numquam iusto cupiditate unde asperiores nihil laborum? Tempore vel iure quibusdam eius debitis blanditiis, nisi impedit nemo.
            </p>
          </div>
          <div className="card">
            <div className='card-image'>
              <img src="https://picsum.photos/300/200" alt="alt" />
            </div>
            <h2>lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, accusamus? Minima temporibus quibusdam numquam iusto cupiditate unde asperiores nihil laborum? Tempore vel iure quibusdam eius debitis blanditiis, nisi impedit nemo.
            </p>
          </div>
          <div className="card">
            <div className='card-image'>
              <img src="https://picsum.photos/300/200" alt="alt" />
            </div>
            <h2>lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, accusamus? Minima temporibus quibusdam numquam iusto cupiditate unde asperiores nihil laborum? Tempore vel iure quibusdam eius debitis blanditiis, nisi impedit nemo.
            </p>
          </div>
        </div>
      }
    </div>
  );
}
export default App;
