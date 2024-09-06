const initMapArray = (x, y) => {
  const mapArray = [];
  for(let i=0; i<x; i++) {
    for(let j=0; j<y; j++) {
      mapArray[i][j] = 0;
    }
  }
  return mapArray;
}