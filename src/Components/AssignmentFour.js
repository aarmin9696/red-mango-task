import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

function AssignmentFour() {
 
  const [loading, setLoading] = useState(false);
  const [showTick, setShowTick] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowTick(true);
    }, 3000);
  };
    

  return (
    <div className='container3'>
     <AiOutlineClose className='close'/>
     <div className="corner">
    
    </div>
    <div className="triangle-text-container">
      <span className="triangle-text">OFFER</span>
    </div>


    <div className='container2'>
    
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus, lacus non sollicitudin euismod, mauris risus blandit justo, sit amet accumsan ligula justo sit amet purus. Donec vitae mauris quis neque imperdiet accumsan. Aliquam neque nulla, scelerisque eget euismod in, maximus dictum lacus. Curabitur vel maximus nisi, id iaculis ante. Vivamus vitae lorem vitae mauris accumsan iaculis id et enim. Aliquam vehicula gravida metus eget fermentum. Nullam porttitor eros ante, at suscipit urna suscipit at.</p>
      <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus, lacus non sollicitudin euismod, mauris risus blandit justo, sit amet accumsan ligula justo sit amet purus. Donec vitae mauris quis neque imperdiet accumsan. Aliquam neque nulla, scelerisque eget euismod in, maximus dictum lacus. Curabitur vel maximus nisi, id iaculis ante. Vivamus vitae lorem vitae mauris accumsan iaculis id et enim. Aliquam vehicula gravida metus eget fermentum. Nullam porttitor eros ante, at suscipit urna suscipit at.</p>
      <Button variant={loading ? "light" : "primary"} className='open' onClick={handleClick} disabled={loading}>
          {loading ? <Spinner className='spinner' animation="border" variant="primary" /> : (showTick ? <AiOutlineCheck className='check'/> : "Confirm & Submit")}
        </Button>
    </div>
    </div>
  );
}

export default AssignmentFour;
