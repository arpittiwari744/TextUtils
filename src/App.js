import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState(`light`);
  const [alert, setAlert] = useState(null);

  const showAlert = (msg) => {
    setAlert({ msg: msg });
    setTimeout(() => {
      setAlert(null)
    }, 1100);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode(`dark`);
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled");
    }
    else {
      setmode(`light`);
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze"/>}/>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
