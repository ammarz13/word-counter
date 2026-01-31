import React, {useState} from 'react'
import PropTypes from 'prop-types';



function UpperCase(props) {

const [text, setText] = useState("");




const handleUpper = () =>{
    //console.log("Uppercase value here " + text);
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to ٗUpperCase", "success");
}

const handleChange = (event) =>{
    //console.log(setText)
    
    setText(event.target.value);
   
   
}

const handleLower = () =>{
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
}


const handleClear = () =>{
    const newText = '';
    setText(newText);
    props.showAlert("Input Fields empty", "success");
}


const copyText = (e) =>{
  // const copyWord = text.select();
  // setText(copyWord);
  if (text === ""){
    setText("Nothing to copy");
  } else {
    
  }

  
  navigator.clipboard.writeText(e.target.text);
  props.showAlert("Copy to clipboard", "success");
}


// const toggleChnage = () =>{

//   if(mystyle.color === 'white'){
//     setMyStyle({
//       color: 'black',
//       backgroundColor: 'white'
//     })
//     setTextUpdate("Light Mode");
//     document.body.classList.add('light-mode');
//     document.body.classList.remove('dark-mode');

//   } else {
//     setMyStyle({
//       color: 'white',
//       backgroundColor: 'black'
//     })
//     setTextUpdate("Dark Mode");
//     document.body.classList.add('dark-mode');
//     document.body.classList.remove('light-mode');
//   }
  
//   setMyStyle({
//     color: mystyle.color === 'black' ? 'white' : 'black',
//     backgroundColor: mystyle.backgroundColor === 'white' ? 'black' : 'white',
   
//   })
//   setTextUpdate("Dark Mode");
// }

  return (
    <div>
        
      <div className="container mt-5">
        <div className="mb-3">
        <h1>{props.title}</h1>
         
          <textarea type="text"   className="form-control my-3" rows="8" value={text} onChange={handleChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}/>

         <div className='d-flex gap-2'>
         <button className='mt-2 btn btn-primary' onClick={handleUpper} disabled={!text.trim()}>UpperCase</button>

<button className='mt-2 btn btn-primary' onClick={handleLower} disabled={!text.trim()}>LowerCase</button>
<button className='mt-2 btn btn-primary' onClick={copyText} disabled={!text.trim()}>CopyText</button>


<button className={`mt-2 btn btn-danger`} onClick={handleClear} disabled={!text.trim()}>Clear All</button>
{/* <button className='mt-2 btn btn-primary' onClick={toggleChnage}>{textUpdate}</button> */}

         </div>
        </div>
      </div> 

      <div className='container mt-5'>
        <div className="mb-3">
        <h2>Text Summary</h2>
            <p><b>Word Count</b> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
          <p><b>Character Length</b> {text.length} </p>


          <h2>Preview</h2>
          <p>{text.length>0 ? text : 'Enter text in above textarea to preview'}</p>
        </div>
      </div> 
    </div>
  )
}


UpperCase.propTypes = {
    title: PropTypes.string
}

UpperCase.defaultProps = {
    title: "Enter your text here"
}

export default UpperCase;



