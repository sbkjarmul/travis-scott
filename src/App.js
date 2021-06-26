import './App.css';
import Hero from './components/hero'
import Album from './components/album'
import Navbar from './components/navbar'
import Video from './components/video'
import Footer from './components/footer'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="controls">
          <NavLink to="/" activeClassName="active" exact>
            <div className="controls__circle"></div>
          </NavLink>
          <NavLink to="/album" activeClassName="active">
            <div className="controls__circle"></div>
          </NavLink>
          <NavLink to="/video" activeClassName="active">
            <div className="controls__circle"></div>
          </NavLink>
        </div>
        
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
