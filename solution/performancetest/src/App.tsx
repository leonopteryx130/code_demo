import { getPaintTime, getFID, getLCP, getTTI, getCLS } from "./utils/moniteur";
import Square from "./components/square";
import { useEffect, useState } from "react";


function App() {


  getPaintTime()
  getFID()
  getLCP()
  getTTI()
  getCLS()

  const[isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000)
  }, [])

  return (
    <div className="App">
      {isVisible?<Square></Square>:null}
      <div style={{width: "200px", height: "300px", backgroundColor: "pink"}}>
        "pink"
      </div>
      <input />
    </div>
  );
}

export default App;
