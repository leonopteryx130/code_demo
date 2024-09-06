class Map {
  constructor() {
    this.map = [];
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
}

const myMap = new Map();

export default myMap;