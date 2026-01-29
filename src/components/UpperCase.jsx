import React, {useState} from 'react'
import PropTypes from 'prop-types';

function UpperCase(props) {

const [text, setText] = useState("");


const handleUpper = () =>{
    //console.log("Uppercase value here " + text);
    const newText = text.toUpperCase();
    setText(newText);
}

const handleChange = (event) =>{
    //console.log(setText)
    setText(event.target.value);
   
   
}

const handleLower = () =>{
    const newText = text.toLowerCase();
    setText(newText);
}


const handleClear = () =>{
    const newText = '';
    setText(newText);
}

  return (
    <div>
        
      <div className='container mt-5'>
        <div className="mb-3">
        <h1>{props.title}</h1>
         
          <textarea type="text"   className="form-control my-3" rows="8" value={text} onChange={handleChange} />

         <div className='d-flex gap-2'>
         <button className='mt-2 btn btn-primary' onClick={handleUpper}>UpperCase</button>

<button className='mt-2 btn btn-primary' onClick={handleLower}>LowerCase</button>


<button className='mt-2 btn btn-primary' onClick={handleClear}>Clear All</button>
         </div>
        </div>
      </div> 

      <div className='container mt-5'>
        <div className="mb-3">
        <h2>Text Summary</h2>
            <p><b>Word Count</b> {text.split(" ").length}</p>
          <p><b>Character Length</b> {text.length} </p>


          <h2>Preview</h2>
          <p>{text}</p>
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



