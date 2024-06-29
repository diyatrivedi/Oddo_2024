

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Select from './components/Select';
import Admin from './components/Admin';
import Trainee from './components/Trainee';
import User from './components/User';
import Login from './components/Login';
import Register from './components/Register';
import Exercises from './components/Exercises';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    
    <Routes>
    {/* <Navbar /> */}

      
      <Route path='/' element={<Login/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/trainee' element={<Trainee/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/exercise' element={<Exercises/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    {/* <Footer /> */}
  </Box>
);

export default App;
