import { Select } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, showLoader } from "../redux-slice/loaderSlice";
import { fetchCrypto,fetchCurrencies } from "../redux-slice/dropdownSlice";
import { setCrypto,setCurrency } from "../redux-slice/selectedSlice";
import { BACKEND_API } from "../utils/constants";
const Dropdown = (props) => {
  const dispatch = useDispatch();
  const {cryptos,currencies} = useSelector((state) => state.dropdown);
  const { url } = props;
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const handleCrypto=(value)=>{
    dispatch(setCrypto(value));
  }
  const handleCurrencies=(value)=>{
    dispatch(setCurrency(value));
  }
  useEffect(() => {
    const func1 = () => {
      fetch(url)
        .then((res) => res.json())
        .then((jsondata) => {
          var options = jsondata.map((crypto) => ({
            id: crypto.id,
            symbol: crypto.symbol,
            name: crypto.name,
            icon: crypto.image,
          }));
          dispatch(fetchData(options));
          var dat = jsondata.map((item) => ({
            value: item.id,
            label: item.name,
          }));
          dispatch(fetchCrypto(dat));
          console.log(dat);
        })
        .catch((err) => console.log(err.message));
    };
    const func2=()=>{
      fetch(url).then(res=>res.json())
      .then(jsondata=>{
        var curr=jsondata.map(item=>({
          value:item,
          label:item
        }))
        dispatch(fetchCurrencies(curr));
      })
    }
    dispatch(showLoader(true));
    if(url===BACKEND_API.CRYPTO_URL) func1();
    else if(url===BACKEND_API.CURRENCIES_URL) func2();
    dispatch(showLoader(false));
  }, []);
  return (
    <Select
      showSearch
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={(url===BACKEND_API.CRYPTO_URL)?handleCrypto:handleCurrencies}
      // onSearch={onSearch}
      filterOption={filterOption}
      options={(url===BACKEND_API.CRYPTO_URL)?cryptos:currencies}
    />
  );
};

export default Dropdown;
