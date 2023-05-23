import { getPaintTime, getFID, getLCP } from "./utils/moniteur";

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
    </div>
  );
}

export default App;
