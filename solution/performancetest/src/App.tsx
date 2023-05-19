import { getPaintTime } from "./utils/moniteur";

function App() {

  console.log(11)

  getPaintTime()

  return (
    <div className="App">
      <div style={{width: "200px", height: "300px", backgroundColor: "pink"}}>
        "pink"
      </div>
    </div>
  );
}

export default App;
