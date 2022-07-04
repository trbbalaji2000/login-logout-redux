import React, { useEffect } from "react";

import "./App.css";
import NotFound from './components/NotFound';
import Navbar from "./components/layout/Navbar";
import Dashboard from './components/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PrivateRoute from './routing/PrivateRoute';
import SetAuthToken from "./utils/SetAuthToken";
import Landing from './components/layout/Landing';
import store from './store';
import { loadUser } from "./actions/auth";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
if(localStorage.token)
{

  SetAuthToken(localStorage.token)
}

function App() {
 useEffect(()=>{
   store.dispatch(loadUser());
 },[]);
  return (
    <BrowserRouter>
    <div  >
     <Navbar/>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path="/register" element={<Register></Register>} />
        <Route exact path="/login" element={<Login/>} />


        <Route exact path="/dashboard" element={<PrivateRoute >
          <Dashboard/>
        </PrivateRoute>} />
        {/* <PrivateRoute  exact path="/dashboard" component={Dashboard}></PrivateRoute> */}
                <Route exact path="*" element={<NotFound/>} />
      </Routes>
    </div>
   
  </BrowserRouter>
  );
}

export default App;
