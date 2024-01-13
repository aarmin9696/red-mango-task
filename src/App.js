import React, { useState } from 'react';
import './App.css';
import AssignmentOne from './Components/AssignmentOne';
import AssignmentTwo from './Components/AssignmentTwo';
import AssignmentThree from './Components/AssignmentThree';
import AssignmentFour from './Components/AssignmentFour';
import AssignmentFive from './Components/AssignmentFive';
import AssignmentSix from './Components/AssignmentSix';

function App() {
  const [selectedComponent, setSelectedComponent] = useState('AssignmentOne');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'AssignmentOne':
        return <AssignmentOne />;
      case 'AssignmentTwo':
        return <AssignmentTwo />;
      case 'AssignmentThree':
        return <AssignmentThree />;
      case 'AssignmentFour':
        return <AssignmentFour />;
      case 'AssignmentFive':
        return <AssignmentFive />;
      case 'AssignmentSix':
        return <AssignmentSix />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={() => setSelectedComponent('AssignmentOne')}>AssignmentOne</button>
        <button onClick={() => setSelectedComponent('AssignmentTwo')}>AssignmentTwo</button>
        <button onClick={() => setSelectedComponent('AssignmentThree')}>AssignmentThree</button>
        <button onClick={() => setSelectedComponent('AssignmentFour')}>AssignmentFour</button>
        <button onClick={() => setSelectedComponent('AssignmentFive')}>AssignmentFive</button>
        <button onClick={() => setSelectedComponent('AssignmentSix')}>AssignmentSix</button>
      </div>
      {renderComponent()}
    </div>
  );
}

export default App;
