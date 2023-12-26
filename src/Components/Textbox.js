import React, {useState} from "react";

export default function Textbox(props) {
    const[text , setText] = useState('Enter Text Here');
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

  return (
    <>
    <h1 className="my-3">{props.heading}</h1>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          value={text}
          id="TextBox"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary my-3" onClick={handleUpClick}> Convert To Uppercase</button>
    </>
  );
}
