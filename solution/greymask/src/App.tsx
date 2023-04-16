import { createRef, useState } from "react";
import PortalDialog from "./components/dialog";

function App() {

  const maskRef = createRef<HTMLDivElement>()
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    maskRef.current!.style.background = 'rgba(0, 0, 0, 0.3)'
    maskRef.current!.style.zIndex = '10'
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    maskRef.current!.style.background = 'rgba(0, 0, 0, 0)'
    maskRef.current!.style.zIndex = '-1'
    setIsModalVisible(false);
  };

  return (
    <div className="App">
      <div>
        <div 
          onClick={showModal}
          style={{
            backgroundColor: "lightblue",
            height: "10vh",
            width: "30vw",
            alignItems: "center"
          }}
        >触发弹窗</div>
      </div>
      <PortalDialog
        visible={isModalVisible}
      >
        <div style={{
          width: "40%", 
          border: "1px solid #e5e7ea", 
          textAlign: "center", 
          marginLeft:"20px"
        }}
          onClick={handleCancel}
        >
            关闭
        </div>
      </PortalDialog>
      <div style={{
        position: "absolute",
        top: 0,
        width: "100vw",
        height: "100vh",
        background: 'rgba(0, 0, 0, 0)',
        zIndex: -1
      }}
        ref={maskRef}
      ></div>
    </div>
  );
}

export default App;
