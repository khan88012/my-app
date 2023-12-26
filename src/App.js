import './App.css';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';

function App() {
  return (
   <>
    <Navbar title = "TestUtils"/>
    <div className="container">
      <Textbox heading = "Enter Your Text Here..."/>
    </div>
   </>

  );
}

export default App;
