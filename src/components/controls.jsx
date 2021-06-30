import React from 'react'

const Controls = ({ currentView }) => {
  const setClass = (number) => {   

    if (currentView === number && currentView === 2 || currentView === number && currentView === 4) {
      return 'controls__circle controls__circle--primary  controls__circle--active'
    } else if (currentView === number ) {
      return 'controls__circle controls__circle--active'
    } else 
      return 'controls__circle'
  }


  return (
    <ul className={currentView === 2 || currentView === 4 ? 'controls controls--primary' : 'controls' }>
        <li className={setClass(1)}></li>
        <li className={setClass(2)}></li>
        <li className={setClass(3)}></li>
        <li className={setClass(4)}></li>
    </ul>
  )
}

export default Controls;