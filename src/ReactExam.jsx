import React, { useState } from "react";

export default function ReactExam() {
  const color = "#f5655b";
  const [change, setChange] = useState(color);
  const [text, setText] = useState("");

  const changeColor = () => {
    const color1 = "#23773E";
    setChange(color1);
    setText("Button Clicked");
  };
  return (
    <>
      <div className="change">
        <div className="col-lg-6 col-md-6 col-sm-6 ">
          <div className="Leftside card" style={{ backgroundColor: change }}>
            <div id="hello">
                <h4>Hello</h4>
                <h4>Hello Hello</h4>
                <h4>Hello Hello Hello</h4>
                <h4>Hello Hello Hello Hello</h4>
            </div>
          </div>
        </div>
      </div>
      <div id="button">
        <button onClick={changeColor} id="button1">
          Press
        </button>
      </div>
      <div className="text1">
        <p>
          <b>{text}</b>
        </p>
      </div>
    </>
  );
}
