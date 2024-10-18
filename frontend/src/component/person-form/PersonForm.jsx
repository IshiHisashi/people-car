import React, { useState } from "react";
import Input from "../common/Input.jsx";
import { Button } from "antd";

const PersonForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-3xl font-semibold">Add Person</p>
      <div className="flex gap-4 justify-center">
        <Input
          labelText="FirstName"
          placeholder="First Name"
          onChange={() => console.log("x")}
          required
        />
        <Input
          labelText="LastName"
          placeholder="Last Name"
          onChange={() => console.log("x")}
          required
        />
        <Button disabled>Add Person</Button>
      </div>
    </div>
  );
};

export default PersonForm;
