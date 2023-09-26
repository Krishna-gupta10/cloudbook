import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Notes from './components/Notes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import CreateNote from './components/CreateNote';

function App() {
  return (  
    <NoteState>
      <Router>
        <div className="App">
          <Navbar title="Cloudbook" link1="About" />
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
            <Route
              path="/createnote"
              element={<CreateNote />}
            />
            <Route
              path="/notes"
              element={<Notes />}
            />
          </Routes>
        </div>
      </Router>
    </NoteState>

  );
}

export default App;
