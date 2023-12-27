import React, { useState } from "react";

export default function Textbox(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!!!!", "success");
  };
  const handlLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!!!!", "success");

  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div style={{color: props.mode === 'light'?'black':'white'}}>
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
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          {" "}
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handlLoClick}>
          {" "}
          Convert To Lowercase
        </button>

        <h1>Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} letters.
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0?text:'Enter Text Above To Check The Preview'}</p>
      </div>
    </>
  );
}
