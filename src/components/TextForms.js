import React , {useState} from 'react'

export default function TextForms(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!" , "success");
    }

    const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowererCase!" , "success");
    }

    const handleClearClick = () =>{
      let newText = "";
      setText(newText);
      props.showAlert("Text Cleared" , "success");
    }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
      props.showAlert("Converted to Speech!" , "success");
    }

    // const handleCopy =() => {
    //   console.log("I am a copy");
    //   var text = document.getElementById("myBox");
    //   text.select(); 
    //   text.setSelectionRange(0, 9999);    
    //   navigator.clipboard.writeText(text.value);     
    //   props.showAlert("Copied to Clipboard!", "success");
    // }

    const handleExtraSpaces=()=> {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!","success");
    }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const[text , setText] = useState('');

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h4>{props.heading}</h4>
        <textarea className ="form-control mt-3 " value={text} onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
        <button className='btn btn-primary btn-outline-light mt-3' onClick={handleUpClick}>To upperCase</button>
        <button className='btn btn-primary btn-outline-light mt-3 mx-1' onClick={handleLoClick}>To lowerCase</button>
        <button className='btn btn-primary btn-outline-light mt-3 mx-1' onClick={handleClearClick}>Clear</button>    
        <button className='btn btn-primary btn-outline-light mt-3 mx-1' onClick={speak} >Speak</button>
        {/* <button className='btn btn-primary btn-outline-light mt-3 mx-1' onClick={handleCopy}>Copy</button> */}
        <button className='btn btn-primary btn-outline-light mt-3 mx-1' onClick={handleExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h4 className='mt-3' >Your Text Summary</h4>
      <p> {text.split(" ").filter((element) => {return element.length!== 0} ).length} words and {text.length} characters</p>
      <p> {text.split(" ").length * 0.008} Minutes read</p>

      <h4>Preview</h4>
      <p>{text.length > 0 ?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
