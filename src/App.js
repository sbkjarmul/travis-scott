import './App.css';
import Hero from './components/hero'
import Album from './components/album'
import Navbar from './components/navbar'
import Video from './components/video'
import Footer from './components/footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Hero />
        <Album />
        <Video />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
