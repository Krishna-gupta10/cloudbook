import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar title="Cloudbook" link1="About" />
        <h1 className="my-3">Welcome To Cloudbook - Notes On the Go!</h1>
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
