import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import '../src/styles/fonts.css'

function App() {
  return (
    <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
