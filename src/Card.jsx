import React from "react";


function Heading(props) {
  return (
    
        
    <div className="upper">
          <img src={props.img} className="img" alt="" />
          <h2>{props.name}</h2>
          <p>{props.para}</p>
        </div>
    
  );
}

export default Heading;
