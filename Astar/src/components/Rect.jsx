import React from 'react';

const styles = {
  commonRect: {
    width: "20px",
    height: "20px",
    border: "1px solid",
    flexShrink: 0
  }
}

const Rect = (props) => {
  const {value} = props;

  return (
    <div style={{...styles.commonRect, backgroundColor: ["white", "brown"][value], borderColor: ["black", "brown"][value]}}>
      
    </div>
  )
}

export default Rect;