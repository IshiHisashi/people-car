import React, { useState, useContext } from "react";
import Input from "../common/Input.jsx";
import { Button, Select, Spin } from "antd";
import { GlobalContext } from "../../context/GlobalContext.js";
import { useMutation } from "@apollo/client";
import { GET_CARS } from "../../utils/queries.js";
import { CREATE_CAR } from "../../utils/mutations.js";

const CarForm = () => {
  const [formData, setFormData] = useState({
    year: "",
    make: "",
    model: "",
    price: "",
    personId: "",
  });
  const { people } = useContext(GlobalContext);
  const [createCar, { loading, error }] = useMutation(CREATE_CAR, {
    refetchQueries: [{ query: GET_CARS }],
    onCompleted: () => {
      setFormData({ year: "", make: "", model: "", price: "", personId: "" });
    },
    onError: (error) => {
      console.error("Error creating car:", error);
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePersonChange = (personId) => {
    setFormData((prevData) => ({
      ...prevData,
      personId,
    }));
  };

  const handleAddCar = () => {
    createCar({
      variables: {
        year: parseInt(formData.year),
        make: formData.make,
        model: formData.model,
        price: parseFloat(formData.price),
        personId: formData.personId,
      },
    });
  };

  if (loading) return <Spin />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col gap-6">
      <p className="text-3xl font-semibold">Add Car</p>
      <div className="flex gap-4 justify-center">
        <Input
          className="w-[75px]"
          labelText="Year"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleInputChange}
          required
        />
        <Input
          labelText="Make"
          name="make"
          placeholder="Make"
          value={formData.make}
          onChange={handleInputChange}
          required
        />
        <Input
          labelText="Model"
          name="model"
          placeholder="Model"
          value={formData.model}
          onChange={handleInputChange}
          required
        />
        <Input
          className="w-[75px]"
          labelText="Price"
          name="price"
          prefix="$"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
        <div className="flex items-center gap-2">
          <label className="block">
            <span className="text-red-500 mr-1">*</span>
            Person:
          </label>
          <Select
            placeholder="Select a person"
            onChange={handlePersonChange}
            value={formData.personId}
            className="text-start w-[125px]"
          >
            {people.map((person) => (
              <Select.Option key={person.id} value={person.id}>
                {person.firstName} {person.lastName}
              </Select.Option>
            ))}
          </Select>
        </div>
        <Button
          type="primary"
          onClick={handleAddCar}
          disabled={
            !formData.year ||
            !formData.make ||
            !formData.model ||
            !formData.price ||
            !formData.personId
          }
        >
          Add Car
        </Button>
      </div>
    </div>
  );
};

export default CarForm;
