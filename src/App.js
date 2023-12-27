import './App.css';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';
import About from './Components/About';
import Alert from './Components/Alert';
import { useState } from 'react';

function App() {
  const [mode , setMode]= useState('light');
  const  [alert , setAlert] = useState(null);

  const toggleMode = () =>{
    console.log('toggle theme clicked')
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Text Utils - Dark'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const showAlert = (message , type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  return (
   <>
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      <Textbox heading = "Enter Your Text Here..." mode={mode} showAlert={showAlert}/>
    </div>
   {/* <About /> */}

   </>


  );
}

export default App;
