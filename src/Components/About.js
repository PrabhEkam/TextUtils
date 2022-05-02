import React, { useState } from "react";

export default function About() {
  
  const [myStyle, setmyStyle] = useState({
    color: "white",
    backgroundColor: "#1A1A1A",
    
  });

  const [myStyle2, setmyStyle2] = useState({
    color: "white",
    backgroundColor: "#2A2A2A",
  })

  const [btnText, setbtnText] = useState("Enable Dark Mode")
  

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setmyStyle({ color: "black", backgroundColor: "white"});
      setmyStyle2({ color: "black", backgroundColor: "white" });
        setbtnText("Enable Dark Mode");
    }
     else {
      setmyStyle({ color: "white", backgroundColor: "#1A1A1A",border:'1px #2A2A2A' });
      setmyStyle2({ color: "white", backgroundColor: "#2A2A2A" });
      setbtnText("Enable Light Mode");
    }
  };

  return (
    <div className="Container" style={myStyle}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle2}>
          <h2 className="accordion-header" id="headingOne" style={myStyle}>
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle2}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle2}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="my-3">
        <button
          type="button"
          onClick={toggleStyle}
        className="btn btn-secondary"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
