import { useState } from 'react'
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
  let history = useHistory();
  const [isForm, setIsForm] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar setIsForm={setIsForm} />
          {/* <Switch>
            <Route path="/" exact component={Hero} />
            <Route path="/album" component={Album} />
            <Route path="/video" component={Video} />
          </Switch> */}

          <Hero />
          <Album />
          <Video />
          <Events />
          <Controls />
          <Form isForm={isForm} setIsForm={setIsForm} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
