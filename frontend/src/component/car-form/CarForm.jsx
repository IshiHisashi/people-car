import React from "react";
import Input from "../common/Input.jsx";
import { Button } from "antd";

const CarForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-3xl font-semibold">Add Car</p>
      <div className="flex gap-4 justify-center">
        <Input
          className="w-[75px]"
          labelText="Year"
          placeholder="Year"
          onChange={() => console.log("x")}
          required
        />
        <Input
          labelText="Make"
          placeholder="Make"
          onChange={() => console.log("x")}
          required
        />
        <Input
          labelText="Model"
          placeholder="Model"
          onChange={() => console.log("x")}
          required
        />
        <Input
          className="w-[75px]"
          labelText="Price"
          prefix="$"
          onChange={() => console.log("x")}
          required
        />
        <Input
          labelText="Person"
          placeholder="Person"
          onChange={() => console.log("x")}
          required
        />
        <Button disabled>Add Car</Button>
      </div>
    </div>
  );
};

export default CarForm;
