import React, {useEffect, useRef, useState} from "react";
import MapDraw from "../components/MapDraw";
import myMap from "../engine/map";

const style = {
  workBench: {
    position: "fixed",
    bottom: "0",
    left: "0",
    // width: "100vw",
    width: "100vw",
    height: "50px",
    backgroundColor: "rgba(50, 50, 255, 0.3)",
    display: "flex",
    gap: "30px",
    alignItems: "center",
  },
  inputStyle: {
    width: "70px",
    height: "30px"
  }
}

const Main = () => {

  const [mapArray, setMapArray] = useState([])
  const [xNum, setXNum] = useState(0)
  const [yNum, setYNum] = useState(0)
  const [obstacleNum, setObstacleNum] = useState(0)

  useEffect(() => {
    myMap.initMap(0, 0)
    setMapArray(myMap.map)
  }, [])

  const generalMap = () => {
    if (xNum <= 0 || yNum <= 0) {
      alert("请输入大于0的数字")
      return
    }
    myMap.initMap(xNum, yNum)
    myMap.randomObstacle(obstacleNum)
    setMapArray(myMap.map)
  }

  const clearMap = () => {
    myMap.initMap(0, 0)
    myMap.randomObstacle(0)
    setXNum(0)
    setYNum(0)
    setObstacleNum(0)
    setMapArray(myMap.map)
  }

  return (
    <div style={{
      overflow: "scroll",
      width: "auto"
    }}>
      <div>
        <MapDraw
          matrix={mapArray}
        />
      </div>
      <div style={style.workBench}>
        <div style={{
          display: "flex",
          alignItems: "center",
        }}>
          x轴网格数:
          <input
            type="number"
            onChange={(e) => {
              setXNum(e.target.value)
            }}
            style={style.inputStyle}
            value={xNum}
          />
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
        }}>
          y轴网格数:
          <input
            type="number"
            onChange={(e) => {
              setYNum(e.target.value)
            }}
            style={style.inputStyle}
            value={yNum}
          />
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
        }}>
          随机障碍物数:
          <input
            type="number"
            onChange={(e) => {
              setObstacleNum(e.target.value)
            }}
            style={style.inputStyle}
            value={obstacleNum}
          />
        </div>
        <button onClick={generalMap}>生成地图</button>
        <button onClick={clearMap}>清空地图</button>
      </div>
    </div>
  )
}

export default Main