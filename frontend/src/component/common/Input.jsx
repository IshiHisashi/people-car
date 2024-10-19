import React from "react";
import { Input as InputAnt } from "antd";

const Input = (props) => {
  const { labelText, ...restInputProps } = props;
  return (
    <div className="flex items-center gap-2">
      <label className="block">
        <span className="text-red-500 mr-1">*</span>
        {labelText}:
      </label>
      <InputAnt {...restInputProps} />
    </div>
  );
};

export default Input;
