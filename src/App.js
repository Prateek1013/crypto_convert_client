import "./App.css";
import Dropdown from "./components/Dropdown";
import InpBox from "./components/Inputbox";
import Btn from "./components/Btn";
import Title from "./components/Title";
import Loader from "./components/Loader";
import { BACKEND_API } from "./utils/constants";
import { useSelector } from "react-redux";
function App() {
  const {showAmount,showimg,img}=useSelector(state=>state.result);
  return (
    <>
      <Title />
      <Loader />
      <div style={{ display: "flex" }}>
        <div style={{ marginTop: "10%", marginLeft: "25%" }}>
          <div style={{ display: "flex" }}>
           { showimg ? <img src={`${img}`} /> : <p></p>}
            <Dropdown url={BACKEND_API.CRYPTO_URL}/>
          </div>
          <div style={{ marginTop: "20px" }}>
            <InpBox />
          </div>
        </div>
        <div style={{ marginTop: "10%", marginLeft: "25%" }}>
          <div style={{ display: "inline-flex" }}>
            <h2 style={{ marginRight: "20%" }}>{`${showAmount}`}</h2>
            <Dropdown url={BACKEND_API.CURRENCIES_URL}/>
          </div>
        </div>
        <div
          style={{ marginTop: "17%", marginLeft: "-30%", position: "inherit" }}
        >
          <Btn />
        </div>
      </div>
    </>
  );
}

export default App;
