import React from 'react'
import './App.css';
import Login from './Login'
import {BrowserRouter,Routes , Route} from 'react-router-dom'
import Signup from './Signup'
import PropertyForm from './Seller Flow/PropertyForm';
import PropertyList from './Seller Flow/PropertyList';
import PropertyItem from './Seller Flow/PropertyItem';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={ <Login />}></Route>
        <Route path ='/signup' element={ <Signup />}></Route>
        <Route path ='/propertyform' element={ <PropertyForm />}></Route>
        <Route path ='/propertylist' element={ <PropertyList />}></Route>
        <Route path ='/propertyitem' element={ <PropertyItem />}></Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;
