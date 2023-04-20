import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route excat path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
