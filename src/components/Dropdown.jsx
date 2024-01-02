import { Select } from "antd";
import { useEffect } from "react";

const Dropdown = () => {
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const onChange = (value) => {
    console.log(`selected ${value}`);
  }
  useEffect(()=>{
    
  },[])
  return (
    <Select
      showSearch
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={onChange}
      // onSearch={onSearch}
      filterOption={filterOption}
      options={[
        {
          value: "jack",
          label: "Jack",
        },
        {
          value: "lucy",
          label: "Lucy",
        },
        {
          value: "tom",
          label: "Tom",
        },
      ]}
    />
  );
};

export default Dropdown;
