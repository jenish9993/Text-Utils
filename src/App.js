import { useState } from 'react';
import './App.css';
import Alert from './component/alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './component/About';


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null)

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const togglemode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark Mode Enable","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enable","success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About" mode={mode} togglemode={togglemode}/>
      
      <Alert alert={alert}/>
      <Routes>
        <Route exact path='/about' element={<About mode={mode}/>} /> 
        <Route exact path='/' element={<TextForm heading="Enter The Text Below" mode={mode} showAlert={showAlert} />} />
      </Routes>
    
    </Router>
    </> 
  );
}

export default App;
