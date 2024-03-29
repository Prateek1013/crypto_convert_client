import {  Select } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLoader } from "../redux-slice/loaderSlice";
import { fetchCrypto, fetchCurrencies } from "../redux-slice/dropdownSlice";
import { setCrypto, setCurrency } from "../redux-slice/selectedSlice";
import { setShowImg,setImg } from "../redux-slice/resultSlice";
import { BACKEND_API } from "../utils/constants";
const Dropdown = (props) => {
  const dispatch = useDispatch();
  const { cryptos, currencies } = useSelector((state) => state.dropdown);
  const { url } = props;
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const handleCrypto = (value,url) => {
    // console.log(url.url);
    dispatch(setCrypto(value));
    dispatch(setShowImg(true));
    var icon=url.url;
    let modifiedUrl = icon.replace(/large/g, 'small');
    dispatch(setImg(modifiedUrl));
  };
  const handleCurrencies = (value) => {
    dispatch(setCurrency(value));
  };
  useEffect(() => {
    const func1 = () => {
      fetch(url)
        .then((res) => res.json())
        .then((jsondata) => {
          dispatch(fetchCrypto(jsondata));
          
        })
        .catch((err) => console.log(err.message));
    };
    const func2 = () => {
      fetch(url)
        .then((res) => res.json())
        .then((jsondata) => {
          dispatch(fetchCurrencies(jsondata));
        });
    };
    dispatch(showLoader(true));
    if (url === BACKEND_API.CRYPTO_URL) func1();
    else if (url === BACKEND_API.CURRENCIES_URL) func2();
    dispatch(showLoader(false));
  }, []);
  return (
    <Select
      showSearch
      placeholder={url===BACKEND_API.CRYPTO_URL?"select/type..":"usd"}
      optionFilterProp="children"
      onChange={
        url === BACKEND_API.CRYPTO_URL ? handleCrypto : handleCurrencies
      }
      filterOption={filterOption}
      options={url === BACKEND_API.CRYPTO_URL ? cryptos : currencies}
    />
  );
};

export default Dropdown;
