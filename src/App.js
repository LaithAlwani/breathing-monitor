import { useState } from "react";
import "./App.css";

function App() {
  const [breathCount, setBreathCount] = useState(0);
  const [ breathTimer, setBreathTimer] = useState(0)

  const [isActivated, setIsActivated] = useState(false);

  const breathing = () => {
    let timerIn = 0;
    let timerOut = 1;
    let breathCount = 0
    
    setIsActivated(true)
    const breathInt = setInterval(() => {
      if (breathCount < 30) {
       
        if (timerIn < 2) {
          timerIn++
          setBreathTimer(timerIn)
        } else {
          if (timerOut <= 4) {
            setBreathTimer(timerOut)
            timerOut++
          } else {
            timerIn = 1
            setBreathTimer(timerIn)
            timerOut=1
            breathCount++
            setBreathCount(breathCount)
          }
          
        }
      } else {
        setTimeout(() => {
          breathCount = 0
          setBreathCount(breathCount)
          setIsActivated(false)
          clearInterval(breathInt)
        },2000)
     }
      
    }, 1000);
  };

  const handleClick = () => {
    breathing();
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2>Breath Count: {breathCount}</h2>
        {!isActivated ? (
          <button className="btn" onClick={handleClick}>Start</button>
        ) : (
          <>
            <p>{breathTimer}</p>
            {breathCount < 30 ? <p>Still working</p> : <p>workout is Over</p>}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
