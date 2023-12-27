import './App.css';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';
import About from './Components/About';
import { useState } from 'react';

function App() {
  const [mode , setMode]= useState('light');

  const toggleMode = () =>{
    console.log('toggle theme clicked')
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
   <>
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
      <Textbox heading = "Enter Your Text Here..." mode={mode}/>
    </div>
   {/* <About /> */}

   </>


  );
}

export default App;
