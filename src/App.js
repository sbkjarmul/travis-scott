import { useState, useEffect } from 'react'
import './App.css';
import Hero from './components/hero'
import Album from './components/album'
import Navbar from './components/navbar'
import Video from './components/video'
import Events from './components/events'
import Footer from './components/footer'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import Controls from './components/controls';
import Form from './components/form';
import { IoTriangle } from 'react-icons/io5'

function App() {
  const viewsCount = 4;
  const [currentView, setCurrentView] = useState(1);
  const [isForm, setIsForm] = useState(false);
  const [direction, setDirection] = useState('start');

  const nextView = () => {
    setDirection('up');
    setCurrentView(currentView === viewsCount ? 1 : currentView + 1);
  }

  const previousView = () => {
    setDirection('down');
    setCurrentView(currentView === 1 ? viewsCount : currentView - 1);
  }

  const setArrowsClass = (arrow) => {
    const isWhiteBackground = currentView === 2 || currentView === 4;
   
    if (isWhiteBackground) {
      return `${arrow}-arrow ${arrow}-arrow--black`;
    } else {
      return `${arrow}-arrow`;
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 38) { 
        previousView();
      }

      if (e.keyCode === 40) {
        nextView();
      }
    })
  },[currentView])

  return (
    <Router>
      <div className="App">
      {/* <div className="tech">Direction: {direction}, View:{currentView}</div> */}
        <Navbar setIsForm={setIsForm} currentView={currentView} />
        <IoTriangle className={setArrowsClass('left')} onClick={previousView} />
        <IoTriangle className={setArrowsClass('right')} onClick={nextView} />
          <Hero currentView={currentView} direction={direction} />
          <Album currentView={currentView} direction={direction} />
          <Video currentView={currentView} direction={direction} />
          <Events currentView={currentView} direction={direction} />
          <Controls currentView={currentView} setCurrentView={setCurrentView} />
          <Form isForm={isForm} setIsForm={setIsForm} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
