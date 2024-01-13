import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiMessageAlt } from "react-icons/bi";
import { FaCircleDown } from "react-icons/fa6";

function AssignmentFive() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setLoading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return Math.min(oldProgress + 1, 100);
      });
    }, 100);
  };

  return (
    <div className='container3 align'>
      <div className='container2'>
        {loading ? (
          <>
            <div className='message-icon' style={{ left: `${progress}%` }}>
              <BiMessageAlt className='message' />
              <span className='progress-text'>{progress === 100 ? 'Done' : `${progress}%`}</span>
            </div>
            <ProgressBar className='progress' now={progress} />
            {progress === 100 && <p>Done</p>}
          </>
        ) : (
          <>
            <button className='dwnld-btn' onClick={handleClick}><FaCircleDown className='download'/></button>
            <h1>Click here to Download</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default AssignmentFive;
