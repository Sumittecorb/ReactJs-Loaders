import { useEffect, useState } from "react";
import "./App.css";
import FadeLoader from "./component/fade_loader";


function App() {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(()=>{
    setShowLoading(true)
       setTimeout(() => {
        setShowLoading(false)

       }, 3000);
    
  },[])
  if (showLoading) return <FadeLoader />;
  return (
    <div className="container">
      <div className="box">
        <p className="text-capitalize">This is example of ball spin fade loader.</p>
      </div>
    </div>
  );
}

export default App;
