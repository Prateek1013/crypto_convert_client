import { Button } from "antd";
import { useDispatch} from 'react-redux'
import { showLoader } from "../redux-slice/loaderSlice";
const Btn = () => {
  const dispatch=useDispatch();
    return (
        <Button type="primary" size="large" onClick={()=>{
          dispatch(showLoader(true));
        }} > Fuck </Button>
      );
}
 
export default Btn;