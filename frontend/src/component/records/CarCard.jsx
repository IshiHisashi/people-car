import React, { useState, useContext } from "react";
import { Card, message, Modal, Button, Select } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { DELETE_CAR, UPDATE_CAR } from "../../utils/mutations.js";
import { GET_CARS } from "../../utils/queries.js";
import Input from "../common/Input.jsx";
import { GlobalContext } from "../../context/GlobalContext";
import { formatCurrency } from "../../utils/fnc.js";
const { Option } = Select;

const CarCard = ({ car }) => {
  const { people } = useContext(GlobalContext);
  const titleText = `${car.year} ${car.make} ${car.model} => ${formatCurrency(
    car.price
  )}`;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    year: car.year,
    make: car.make,
    model: car.model,
    price: car.price,
    personId: car.personId,
  });

  const [updateCar] = useMutation(UPDATE_CAR, {
    variables: { id: car.id, ...formData },
    refetchQueries: [{ query: GET_CARS }],
    onCompleted: () => {
      message.success("Car updated successfully!");
      setIsModalVisible(false);
    },
    onError: () => {
      message.error("Error updating car.");
    },
  });

  const [deleteCar] = useMutation(DELETE_CAR, {
    variables: { id: car.id },
    refetchQueries: [{ query: GET_CARS }],
    onCompleted: () => {
      message.success("Car deleted successfully!");
    },
    onError: () => {
      message.error("Error deleting car.");
    },
  });

  const handleEditClick = () => {
    setIsModalVisible(true);
  };

  const handleDeleteClick = () => {
    deleteCar();
  };

  // Handle input change in the modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "price"
          ? parseFloat(value)
          : name === "year"
          ? parseInt(value, 10)
          : value,
    }));
  };

  const handlePersonChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      personId: value,
    }));
  };

  const handleUpdateCar = () => {
    updateCar();
  };

  return (
    <>
      <Card type="inner" title={titleText} className="text-start">
        <div className="flex gap-16 justify-end">
          <EditOutlined
            className="text-lg cursor-pointer"
            onClick={handleEditClick}
          />
          <DeleteOutlined
            className="text-red-500 text-lg cursor-pointer"
            onClick={handleDeleteClick}
          />
        </div>
      </Card>
      <Modal
        title="Edit Car"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setIsModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleUpdateCar}>
            Save
          </Button>,
        ]}
        className="top-[33%]"
      >
        <div className="flex flex-col gap-6">
          <Input
            labelText="Year"
            name="year"
            type="number"
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
            labelText="Price"
            name="price"
            type="currenty"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Owner</label>
            <Select
              value={formData.personId}
              onChange={handlePersonChange}
              placeholder="Select Owner"
              required
            >
              {people.map((person) => (
                <Option key={person.id} value={person.id}>
                  {person.firstName} {person.lastName}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CarCard;
