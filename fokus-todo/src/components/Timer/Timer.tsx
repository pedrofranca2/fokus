import { useEffect, useState } from "react";
import Tags from "../Tags/Tags";
import "./Timer.css";

const Timer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [time, isActive]);

  const toggleClock = () => {
    setIsActive(!isActive);
  };

  const handleTagClick = (index: number) => {
    // Lógica para definir o tempo com base no índice da tag
    const tagTimes = [25 * 60, 5 * 60, 10 * 60]; // Exemplo de tempos associados a cada tag
    setTime(tagTimes[index]);
  };

  const getTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="timer">
      <Tags onTagClick={handleTagClick} />
      <div className="container-timer">
        <p className="timer-text">{getTime(time)}</p>
        <button className="timer-btn" onClick={toggleClock}>{isActive ? "Pause" : "Start"}</button>
      </div>
    </div>
  );
};


export default Timer;