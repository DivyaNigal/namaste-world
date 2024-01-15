import React,{useState} from 'react'




export default function TextForm(props) {
  const handleClClick = () =>{
    let newtext = '';
    setText(newtext);
  }
  const handleLoClick = () =>{
    let newtext = text.toLowerCase();
    setText(newtext);
  }
 const handleOnChange = (event) =>{
   setText(event.target.value)
  }
  const handleUpClick = () =>{
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
        <div className ="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
    </div>  
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
       <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
       <button type="button" className="btn btn-primary" onClick={handleClClick}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} Words  and {text.length} character</p>
      <p>{0.008 * text.split(" ").length}</p>
      <h2>Preview </h2>
      <p>{text}</p>
    </div>
    </>
  )
}
