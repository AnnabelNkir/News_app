import './App.css';
import React  from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';


function App() {
  let PageSize= 9;

  

  return (
    <>
    
    <NavBar/>
    <Routes>
          <Route path="/"  element={<News pageSize={PageSize} country="in" category="general"/>} />
          <Route path="/about"  element={<About/>} />

          {/* catagory */}
          <Route exact path="/general" element={<News key="General"  pageSize={PageSize} country="in" category="General"/>} />
          <Route exact path="/business" element={<News key="Business" pageSize={PageSize} country="in" category="Business"/>} />
          <Route exact path="/entertainment" element={<News   key="Entertainment" pageSize={PageSize} country="in" category="Entertainment"/>} />
          <Route exact path="/health" element={<News key="Health" pageSize={PageSize} country="in" category="Health"/>} />
          <Route exact path="/science"element={<News key="Science" pageSize={PageSize} country="in" category="Science"/>} />
          <Route exact path="/sports" element={<News key="Sports" pageSize={PageSize} country="in" category="Sports"/>} />
          <Route exact path="/technology" element={<News key="Technology" pageSize={PageSize} country="in" category="Technology"/>} />
          

      </Routes> 
          
   
    
    </>
  );
}

export default App;