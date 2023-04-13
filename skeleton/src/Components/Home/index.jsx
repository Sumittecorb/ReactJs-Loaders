import { useEffect, useState } from 'react';
import '../../../src/App.css';
import { Skeleton_Card } from '../skeleton';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                Array(3)
                    .fill(0)
                    .map((item, index) => <Skeleton_Card />)
            ) : (
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
            )}
        </>
    );
};

export default Home;
