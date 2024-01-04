import { Button } from "antd";
import { useDispatch,useSelector} from 'react-redux'
import { showLoader } from "../redux-slice/loaderSlice";
import { setShowAmount } from "../redux-slice/resultSlice";
import { URL } from "../utils/constants";
const Btn = () => {
  const {crypto,currency,amount}=useSelector(state => state.selectedVariables);
  const dispatch=useDispatch();
    return (
        <Button type="primary" size="large" onClick={()=>{
          if(!crypto) { alert("please select crypto from dropdown"); return; }
          if(amount===0) { alert("please enter amount"); return; }
          dispatch(showLoader(true));
          fetch(`${URL}/convert?crypto=${crypto}&currency=${currency}`).then(res=>res.json())
          .then(jsondata=>{
            dispatch(setShowAmount(amount*jsondata[crypto][currency]));
            dispatch(showLoader(false));
          })
          .catch(err=>console.log(err.message));
        }} > Convert </Button>
      );
}
 
export default Btn;