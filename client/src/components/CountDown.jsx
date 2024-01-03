import React, { useState, useRef, useEffect } from "react";

const CountDown = () => {
  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor((total/1000/60/60/24)%30)
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };
  const startTimer = (e) => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (days > 9 ? days : "0" + days)+" Days : "+
        (hours > 9 ? hours : "0" + hours) +
          " Hrs : " +
          (minutes > 9 ? minutes : "0" + minutes) +
          " Min : " +
          (seconds > 9 ? seconds : "0" + seconds)+" Secs"
      );
    }
  };
  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("Jan 26, 2024 10:00:00");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date("Jan 26, 2024 10:00:00");

    // This is where you need to adjust if
    // you entend to add more time
    // deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  };
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);
  const onClickReset = () => {
    clearTimer(getDeadTime());
  };
  return (
    <div >
      <h2 className="display-5 mt-5 counter fw-bold ">{timer}</h2>
      <p> To Go....</p>
      {/* <button onClick={onClickReset}>Reset</button> */}
    </div>
  );
};

export default CountDown;
