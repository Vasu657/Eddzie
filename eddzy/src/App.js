import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/index/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import About from './pages/index/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Routes with Header and Footer */}
          <Route path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          
          {/* Auth routes without Header and Footer */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Dashboard route with Header and Footer */}
          <Route path="/dashboard" element={
            <>
              <Header />
              <Dashboard />
              <Footer />
            </>
          } />
          
          {/* About route with Header and Footer */}
          <Route path="/about" element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
