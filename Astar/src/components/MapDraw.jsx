import React from "react";
import MapLine from "./MapLine";

const MapDraw = (props) => {
  const { matrix } = props;

  return (
    <div>
    {
      matrix.map((line, index) => {
        return (
          <MapLine
            key={index}
            line={line}
          />
        )
      })
    }
    </div>
  )
}

export default MapDraw;