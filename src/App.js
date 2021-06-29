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

function App() {
  const views = [1,2,3,4];
  const [currentView, setCurrentView] = useState(1);
  const [isForm, setIsForm] = useState(false);

  const changeView = () => {
    const isLastView = currentView === views[views.length - 1];

    setTimeout(() => {
      if (!isLastView) {
        setCurrentView(currentView => currentView + 1)
      } else {
        setCurrentView(1);
      }
    }, 5000);
    // setTimeout(() => {
    //   if (currentView < views[views.length - 1]) {
    //     setCurrentView(currentView => currentView + 1)
    //   } else if (currentView === views.length) {
    //     setCurrentView(1);
    //   }
    // }, 5000);
  }

  useEffect(() => {
    changeView();
  }, [currentView])

  return (
    <Router>
      <div className="App">
        <h1 className="view-counter">{currentView}</h1>
        <Navbar setIsForm={setIsForm} />
          {/* <Switch>
            <Route path="/" exact component={Hero} />
            <Route path="/album" component={Album} />
            <Route path="/video" component={Video} />
          </Switch> */}

          <Hero currentView={currentView} />
          <Album currentView={currentView} />
          <Video currentView={currentView} />
          <Events currentView={currentView} />
          <Controls />
          <Form isForm={isForm} setIsForm={setIsForm} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
