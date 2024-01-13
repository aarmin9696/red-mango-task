import React from 'react';

function AssignmentThree() {
  return (
    <div className='cont'>
      <div className='left'>
      {Array(12).fill().map((_, i) => <p key={i}>Menu Text</p>)}
      </div>
      <div className='right'>
      {Array(6).fill().map((_, i) => (
    <div key={i}>
      <button>View</button>
    </div>
  ))}
      </div>
    </div>
  );
}

export default AssignmentThree;
