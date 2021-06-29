import React from 'react'

const Controls = ({ currentView, setCurrentView }) => {
  const setClass = (number) => {   

    if (currentView === number && currentView === 2 || currentView === number && currentView === 4) {
      console.log('elo');
      return 'controls__circle controls__circle--primary  controls__circle--active'
    } else if (currentView === number ) {
      return 'controls__circle controls__circle--active'
    } else 
      return 'controls__circle'
  }


  return (
    <ul className={currentView === 2 || currentView === 4 ? 'controls controls--primary' : 'controls' }>
        {/* <li className={currentView === 1 ? 'controls__circle controls__circle--active' : 'controls__circle'}></li>
        <li className={currentView === 2 ? 'controls__circle controls__circle--active' : 'controls__circle'}></li>
        <li className={currentView === 3 ? 'controls__circle controls__circle--active' : 'controls__circle'}></li>
        <li className={currentView === 4 ? 'controls__circle controls__circle--active' : 'controls__circle'}></li> */}
        <li className={setClass(1)}></li>
        <li className={setClass(2)}></li>
        <li className={setClass(3)}></li>
        <li className={setClass(4)}></li>
    </ul>
  )
}

export default Controls;