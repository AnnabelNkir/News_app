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
          <Route path="/" element={<News pageSize={PageSize} country="us" category="general"/>} />
          <Route path="/about"  element={<About/>} />

          {/* category */}
          <Route exact path="/general" element={<News key="general"  pageSize={PageSize} country="us" category="general"/>} />
          <Route exact path="/business" element={<News key="business" pageSize={PageSize} country="us" category="business"/>} />
          <Route exact path="/entertainment" element={<News   key="entertainment" pageSize={PageSize} country="uk" category="entertainment"/>} />
          <Route exact path="/health" element={<News key="health" pageSize={PageSize} country="us" category="health"/>} />
          <Route exact path="/science"element={<News key="science" pageSize={PageSize} country="us" category="science"/>} />
          <Route exact path="/sports" element={<News key="sports" pageSize={PageSize} country="us" category="sports"/>} />
          <Route exact path="/technology" element={<News key="technology" pageSize={PageSize} country="us" category="technology"/>} />
          

      </Routes> 
          
   
    
    </>
  );
}

export default App;