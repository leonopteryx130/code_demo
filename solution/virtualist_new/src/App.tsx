import FixedSizeList from './components/FixedSizeList';
import './App.css';

function Item({ style, info }: any) {
  return (
    <div style={{display: "flex"}}>
      <div
        className="item"
        style={{
          ...style,
          backgroundColor: info[0]
        }}
      >
        {info[0]}
      </div>
      <div
        className="item"
        style={{
          ...style,
          backgroundColor: info[1],
        }}
      >
        {info[1]}
      </div>
    </div>

  );
}

export default function App() {

  return (
    <>
      <FixedSizeList>
        {Item}
      </FixedSizeList>
    </>
  );
}