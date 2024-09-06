class Map {
  constructor() {
    this.map = [];
    this.startPoint = [];
    this.endPoint = [];
    this.AstarRoute = [];

  }

  initMap(width, height) {
    this.map = [];
    for(let i=0; i<width; i++) {
      this.map.push([]);
      for(let j=0; j<height; j++) {
        this.map[i].push(0);
      }
    }
  }

  randomObstacle(num) {
    for(let i=0; i<num; i++) {
      let x = Math.floor(Math.random() * this.map.length);
      let y = Math.floor(Math.random() * this.map[0].length);
      this.map[x][y] = 1;
    }
  }

  randomStartPoint() {
    let x = Math.floor(Math.random() * this.map.length);
    let y = Math.floor(Math.random() * this.map[0].length);
    this.map[x][y] = 2;
    this.startPoint = [x, y];
    return [x, y];
  }

  randomEndPoint() {
    let x = Math.floor(Math.random() * this.map.length);
    let y = Math.floor(Math.random() * this.map[0].length);
    this.map[x][y] = 3;
    this.endPoint = [x, y];
    return [x, y];
  }

  Astar() {
    // A*算法
    if(this.startPoint.length === 0 || this.endPoint.length === 0) {
      return;
    }
    let openList = [];
    let closeList = [];
    let startPoint = {x: this.startPoint[0], y: this.startPoint[1], f: 0, g: 0, h: 0, parent: null};
    openList.push(startPoint);
    while(openList.length > 0) {
      let current = openList[0];
      for(let i=0; i<openList.length; i++) {
        if(openList[i].f < current.f) {
          current = openList[i];
        }
      }
      openList.splice(openList.indexOf(current), 1);
      closeList.push(current);
    }
  }
}

const myMap = new Map();

export default myMap;