import './App.css';
import { useState } from "react";
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Notes from './components/Notes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import CreateNote from './components/CreateNote';
import Login from './components/Login';
import NewUser from './components/NewUser';

function App() {

  const [alert, setAlert] = useState(null); //To show Alerts

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

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
              element={<CreateNote showAlert={showAlert} />}
            />
            <Route
              path="/notes"
              element={<Notes showAlert={showAlert} />}
            />
            <Route
              path="/login"
              element={<Login showAlert={showAlert} />}
            />
            <Route
              path="/createaccount"
              element={<NewUser />}
            />
          </Routes>
        </div>
        <Alert alert={alert} />
      </Router>
    </NoteState>

  );
}

export default App;
