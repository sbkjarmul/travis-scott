import React from 'react'
import '../App.css'

const Controls = ({ currentView }) => {
  const setControlsClass = () => {
    if (currentView === 2 || currentView === 4) {
      return 'controls controls--primary';
    }

    return 'controls';
  }

  const setCircleClass = (number) => {   
    if (currentView === number && currentView === 2 || currentView === number && currentView === 4) {
      return 'controls__circle controls__circle--primary  controls__circle--active'
    } else if (currentView === number ) {
      return 'controls__circle controls__circle--active'
    } else 
      return 'controls__circle'
  }

  return (
    <ul className={setControlsClass()}>
        <li className={setCircleClass(1)}></li>
        <li className={setCircleClass(2)}></li>
        <li className={setCircleClass(3)}></li>
        <li className={setCircleClass(4)}></li>
    </ul>
  )
}

export default Controls;