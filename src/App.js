import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import Home from './components/Home';
import Learning from './components/Learning';
import ProtectedRoutes from './components/ProtectedRoutes';
import Register from './components/Register';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route element={<ProtectedRoutes/>}>
        <Route path='/learning' element={<Learning/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Route>
    </Routes>
  );
}


export default App;
