import { useState } from "react";
import "./App.css";

function App() {
  const [breathCount, setBreathCount] = useState(0);
  const [breathTimer, setBreathTimer] = useState(1);
  const [message, setMessage] = useState("");
  const [isActivated, setIsActivated] = useState(false);

  const breathing = () => {
    let timerIn = 1;
    let timerOut = 1;
    let breathCount = 0;
    setMessage("");
    setMessage("Breath IN");
    setIsActivated(true);
    const breathInt = setInterval(() => {
      if (breathCount < 30) {
        if (timerIn < 2) {
          timerIn++;
          setBreathTimer(timerIn);
        } else {
          if (timerOut <= 4) {
            setMessage("Breath OUT");
            setBreathTimer(timerOut);
            timerOut++;
          } else {
            setMessage("Breath IN");
            timerIn = 1;
            setBreathTimer(timerIn);
            timerOut = 1;
            breathCount++;
            setBreathCount(breathCount);
          }
        }
      } else {
        clearInterval(breathInt);
        setMessage("DONE");
        setIsActivated(false);
        breathCount = 0;
        setBreathCount(breathCount);
        setTimeout(() => {
          setMessage("");
        }, 2000);
      }
    }, 1000);
  };

  const handleClick = () => {
    breathing();
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Breath Count: {breathCount}</h1>
        {message && (
          <div
            className={message === "Breath OUT" ? "message red" : "message"}
          >
            {message}{" "}
            <img
              src={
                message === "Breath OUT"
                  ? "images/breath-out.png"
                  : "images/breath-in.png"
              }
              alt="breathing"
              className="image"
            />{" "}
          </div>
        )}
        {!isActivated ? (
          <button className="btn" onClick={handleClick}>
            Start
          </button>
        ) : (
          <>
            <h1>{breathTimer}</h1>
            {breathCount >= 30 && <p>workout is Over</p>}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
