import { useState } from 'react';
import Header from './components/Header';
import Uppercase from './components/UpperCase';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [mode , setMode] = useState('light');

  const [alert, setAlert ] = useState(null);

  const [themeColor, setThemeColor] = useState('white');


  const UpdateThemeColor = (color) =>{
    setThemeColor(color);
    document.body.style.backgroundColor = color;
    showAlert(`Theme color has been changed`, "success");

    if (color === "#000000"){
      document.body.style.color = 'white';
    }
  }


  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const modeChnage = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
      showAlert("Light Mode has been enbaled", "success")
      
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = '#ffffff';
      showAlert("Dark Mode has been enbaled", "success")
    }
   
  }
  return (
    <>
    <BrowserRouter>
    
    <Header title="WordCounter" mode={mode} toogleMode={modeChnage} tcolor={themeColor} themeColor={UpdateThemeColor}/>
    <Alert alert={alert}/>
    <Routes>
    
    {/* <Route path="/"  />
    <Route path="/about"  /> */}
    <Route path="/" element={<Uppercase title="Text Utils" mode={mode} showAlert={showAlert}/>} />
    {/* <Route path="/about" element={<About />} /> */}
    </Routes>
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
