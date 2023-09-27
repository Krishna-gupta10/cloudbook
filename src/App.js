import './App.css';
import About from './components/About';
import Home from './components/Home';
import Notes from './components/Notes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import CreateNote from './components/CreateNote';
import Login from './components/Login';
import NewUser from './components/NewUser';

function App() {
  return (
    <NoteState>
      <Router>
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
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/createaccount"
              element={<NewUser />}
            />
          </Routes>
        </div>
      </Router>
    </NoteState>

  );
}

export default App;
