import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase()
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value)
  };
  const handleClearClick = () => {
    let newText = ""
    setText(newText);
  };

  const [text, setText] = useState("");

  return (
    <div className="container">
      <div className="my-3">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-warning mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>You can read within the {0.008 * text.split(" ").length} minutes</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>



  )

}
