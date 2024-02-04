import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Signup from "./components/Signup"
import Home from './components/Home';
import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Signup/>}/>
        <Route path='/home'element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
