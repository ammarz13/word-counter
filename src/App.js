import { useState } from 'react';
import Header from './components/Header';
import Uppercase from './components/UpperCase';

function App() {
  const [mode , setMode] = useState('light');


  const modeChnage = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
   
  }
  return (
    <>
    <Header title="WordCounter" mode={mode} toogleMode={modeChnage}/>
    <Uppercase title="Text Counter" mode={mode}/>
    </>
  );
}

export default App;
