import './App.css';
import Hero from './components/hero'
import Album from './components/album'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Hero />
        <Album />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
