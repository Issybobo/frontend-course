
import './index.css';
import Employee from './components/Employee'
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmploye';
import EditEmployee from './components/EditEmployee';
import Header from './components/Header';
import Employees from './pages/Employees';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Customers from './pages/Customer';
import Dictionary from './components/Dictionary';

function App() {
  
  return (
    <BrowserRouter>
  <Header>
  
    <Routes>
      <Route path='/employees' element = {<Employees/>}/>

      <Route path = '/customers' element = {<Customers/>}/>

      <Route path='/dictionary' element = {<Dictionary/>}/>
    </Routes>
    </Header>
  </BrowserRouter>
    
  
  );
}

export default App; 


