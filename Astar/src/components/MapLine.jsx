import React from "react";
import Rect from "./Rect";

const MapLine = (props) => {
  const { line } = props;

  return (
    <div style={{display: "flex"}}>
    {
      line.map((value, index) => {
        console.log(value);
        return (
          <Rect
            key={index}
            value={value}
          />
        )
      })
    }
    </div>
  )
}

export default MapLine;