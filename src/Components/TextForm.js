import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick= () =>{
console.log("Upper case was clicked   "+text);
let newText=text.toUpperCase();
setText(newText);
props.showAlert("Converted to upper case","success");
  }
  const handleCopy=()=>{
    var text =document.getElementById("myBox");
    text.select();       
    navigator.Clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");  
  }
  
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces are removed","success");  
    }
      
  const handleLoClick= () =>{
    console.log("Upper case was clicked "+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","success");
      }
      const cleartext=() =>{
        console.log("clearing the text box");
        let newText="";
        setText(newText);
        props.showAlert("Text box cleared!","success");
      }
      const handleOnChange= (event) =>{
    console.log("On Change");
    setText(event.target.value);
      }
  const [text, setText] = useState("");
  return (
    <>
    <div className="Container" style={{color: props.mode==="dark"?"white":"black"}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" id="myBox" className="form-label">
          <b>Write Text In Below Area</b>
        </label>
        <textarea
          className="form-control"
          value={text}
          style={{backgroundColor: props.mode==="light"?"white":"#3A3A3A",color: props.mode==="dark"?"white":"black"}}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        <div className="container" >
          <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert To Upper Case</button>
          <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert To Lower Case</button>
          <button className="btn btn-primary mx-3" onClick={cleartext}>Clear Text</button>
          <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
      </div>
      <div className="Container" my-2 >
        <h1>Text Summary</h1>
        <p>
           {text.split(" ").length} words and {text.length} characters  
        </p>
        <p>{0.008 * text.split(" ").length}Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Write something in text area to preview it here!"}</p>
      </div>
    </div>
    </>
  );
}
