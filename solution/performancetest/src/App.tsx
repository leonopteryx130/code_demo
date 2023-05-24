import { getPaintTime, getFID, getLCP } from "./utils/moniteur";
import Square from "./components/square";


function App() {


  getPaintTime()
  getFID()
  getLCP()

  return (
    <div className="App">
      <div style={{width: "200px", height: "300px", backgroundColor: "pink"}}>
        "pink"
      </div>
      <input />
      <Square></Square>
    </div>
  );
}

export default App;
