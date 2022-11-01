import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'
import axios from 'axios';
      // Styling
import './Styling/App.css'
      // Components
import Home from './Components/Home';
import AboutComp from './Components/aboutComp';
import Courses from './Components/Courses';
import Contact from './Components/Contact';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Forgot from './Components/Forgot';
import Admin from './Components/admin';
      // Dashboard Components
import AllCourses from './Components/Dashboard/AllCourses/allCourses';
import Pending from './Components/Dashboard/pending/pending';
import Confirmed from './Components/Dashboard/Confirmed/confirmed';
import Rejected from './Components/Dashboard/Rejected/rejected';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<AboutComp />} />
        <Route path='Courses' element={<Courses/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='/SignUp' element={<Signup/>}  />
        <Route path='/Login' element={<Login/>}  />
        <Route path='/Forgot' element={<Forgot/>}  />
        <Route path='/admin' element={<Admin/>}>
          <Route path='/admin/AllCourses' element={<AllCourses/>} />
          <Route path='/admin/Pending' element={<Pending/>} />
          <Route path='/admin/Confirmed' element={<Confirmed/>} />
          <Route path='/admin/Rejected' element={<Rejected/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;