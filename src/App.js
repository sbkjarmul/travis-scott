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
  const viewsCount = 4
  const [currentView, setCurrentView] = useState(1);
  const [isForm, setIsForm] = useState(false);

  const nextView = () => {
    setCurrentView(currentView === viewsCount ? 1 : currentView + 1);
  }

  const previousView = () => {
    setCurrentView(currentView === 1 ? viewsCount : currentView - 1);
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
        {/* <h1 className="view-counter">{currentView}</h1> */}
        <Navbar setIsForm={setIsForm} currentView={currentView} />
        <IoTriangle className="left-arrow" onClick={previousView} />
        <IoTriangle className="right-arrow" onClick={nextView} />
          <Hero currentView={currentView} />
          <Album currentView={currentView} />
          <Video currentView={currentView} />
          <Events currentView={currentView} />
          <Controls currentView={currentView} setCurrentView={setCurrentView} />
          <Form isForm={isForm} setIsForm={setIsForm} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
