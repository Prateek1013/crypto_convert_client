import "./App.css";
import { Button } from "antd";
import Dropdown from "./components/Dropdown";
import InpBox from "./components/Inputbox";
import Btn from "./components/Btn";
import Title from "./components/Title";
import { useState } from "react";
function App() {
  const [btn,setbtn]=useState(false);
  return (
   
    <>
      <Title/>
    <div style={{ display: 'flex' }}>
      <div style={{ marginTop: "10%", marginLeft: "25%" }}>
        <div style={{ display: "flex"}}>
         { btn ? (<img src="https://assets.coingecko.com/coins/images/325/small/Tether.png" />):(<p></p>)}
          <Dropdown />
        </div>
        <div style={{marginTop:'20px'}} >
        <InpBox />
        </div>
      </div>
      <div style={{ marginTop: "10%", marginLeft: "25%" }}>
        <div style={{ display: 'inline-flex' }}>
          <h2 style={{marginRight:'20%'}}>0</h2>
          <Dropdown />
        </div>
      </div>
      <div style={{marginTop:'17%', marginLeft:'-30%', position:'inherit'}}>
      <Button type="primary" onClick={()=>{
        setbtn(~btn);
      }} > Fuck </Button>
      </div>
    </div>
    </>
  );
}

export default App;
