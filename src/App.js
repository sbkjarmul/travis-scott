import './App.css';
import Hero from './components/hero'
import Album from './components/album'
import Navbar from './components/navbar'
import Video from './components/video'
import Footer from './components/footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route path="/" exact component={Hero} />
            <Route path="/album" component={Album} />
            <Route path="/video" component={Video} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
