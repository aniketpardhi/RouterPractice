
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import React from 'react'
import Header from './RouterApp/Header/Header';
import About from './RouterApp/Pages/About';
import ContactUs from './RouterApp/Pages/ContactUs';
import Services from './RouterApp/Pages/Services';
import ErrorPage from './RouterApp/Pages/ErrorPage';
import Home from './RouterApp/Pages/Home';
import Mainheader from "./RouterApp/Header/Mainheader"
import Footer from './RouterApp/Footer/Footer';
import List from './UseMemoHooks/List';


function App (){
  return (
   <>
 <BrowserRouter>
 {/* <Header/> */}

 <Routes>
   
   
    <Route path='/' element={<Mainheader/>}>
    <Route  index element ={<Home/>}/>
    
    <Route path='/About' element={<About/>}/>
    <Route path='/ContactUs' element={<ContactUs/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='*' element={<ErrorPage/>}/>
    </Route>
    


   
   
 </Routes>
 <Footer/>

 </BrowserRouter>
   </>
  )
}

export default App


