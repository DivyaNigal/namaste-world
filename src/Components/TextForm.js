import React,{useState} from 'react'

export default function TextForm(props) {
  const handleCopy = () =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard","success")
  }
  const RemoveExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces get removed", "success");
  }
  const handleClClick = () =>{
    let newtext = '';
    setText(newtext);
    props.showAlert("Text is cleared", "success")
  }
  const handleLoClick = () =>{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase", "success")
  }
 const handleOnChange = (event) =>{
   setText(event.target.value)
  }
  const handleUpClick = () =>{
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase", "success")
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style ={{color:props.mode==='dark'?'#07316e':'black'}}>
      <h1>{props.heading}</h1>
        <div className ="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style ={{background:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
    </div>  
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
       <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
       <button type="button" className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
       <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
       <button type="button" className="btn btn-primary mx-2" onClick={RemoveExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div className="container my-3" style ={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} Words  and {text.length} character</p>
      <p>{0.008 * text.split(" ").length}</p>
      <h2>Preview </h2>
      <p>{text.length>0 ? text : 'enter something in above textbox to preview it here'}</p>
    </div>
    </>
  )
}
