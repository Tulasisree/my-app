import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import  Timer from 'react-compound-timer';
import './styles.css';
 
ReactDOM.render(
  /*<div>
     <Countdown date={Date.now() + 10000} />
     <button>START</button>
  </div>*/
  <Timer
    initialTime={prompt("Enter the value for timer in seconds")*1000}
    direction="backward"
    startImmediately={false}
>
    {({ start, resume, pause, stop, reset, timerState,initialTime}) => (
        <React.Fragment>
        <div className="buttons top">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        </div>
            <div className="timer">
              <div className="t"><Timer.Hours /></div>  :
               <div className="t"><Timer.Minutes /></div> :
               <div className="t"><Timer.Seconds /></div> 
            </div>
           
            <br />
            <div className="buttons bottom">
                <button onClick={pause}>Pause</button>
                <button onClick={resume}>Resume</button>  
                <button onClick={reset}>Reset</button>
            </div>
        </React.Fragment>
    )}
</Timer>
  ,
  document.getElementById('root')
);
