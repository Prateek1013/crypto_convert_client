import "./App.css";
import Dropdown from "./components/Dropdown";
import InpBox from "./components/Inputbox";
import Btn from "./components/Btn";
import Title from "./components/Title";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Title/>
     <Loader/> 
    <div style={{ display: 'flex' }}>
      <div style={{ marginTop: "10%", marginLeft: "25%" }}>
        <div style={{ display: "flex"}}>
         <img src="https://assets.coingecko.com/coins/images/325/small/Tether.png" />
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
      <Btn/>
      </div>
    </div>
    </>
  );
}

export default App;
