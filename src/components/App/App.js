import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from '../external/LoginPage';
import AuthedRouting from '../AuthedRouting/AuthedRouting';
import RegisterPage from '../external/RegisterPage';
import { useState } from 'react';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <main className="App">
      <Routes>
        <Route
            element={ <AuthedRouting/> }
            exact
            path='/'
        />
        <Route
            element={ <LoginPage/> }
            exact
            path='/login'
        />
        <Route
            element={ <RegisterPage/> }
            exact
            path='/register'
        />
      </Routes>
    </main>
  );
}

export default App;
