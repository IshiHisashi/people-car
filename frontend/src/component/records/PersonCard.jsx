import React, { useContext, useState, useEffect } from "react";
import CarCard from "./CarCard";
import { Card, message, Modal, Button } from "antd";
import { GlobalContext } from "../../context/GlobalContext";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { DELETE_PERSON, UPDATE_PERSON } from "../../utils/mutations.js";
import { GET_PEOPLE } from "../../utils/queries.js";
import Input from "../common/Input.jsx";

const PersonCard = ({ person }) => {
  const { cars } = useContext(GlobalContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: person.firstName,
    lastName: person.lastName,
  });

  const [updatePerson] = useMutation(UPDATE_PERSON, {
    variables: { id: person.id, ...formData },
    refetchQueries: [{ query: GET_PEOPLE }],
    onCompleted: () => {
      message.success("Person updated successfully!");
      setIsModalVisible(false);
    },
    onError: () => {
      message.error("Error updating person.");
    },
  });

  const [deletePerson] = useMutation(DELETE_PERSON, {
    variables: { id: person.id },
    refetchQueries: [{ query: GET_PEOPLE }],
    onCompleted: () => {
      message.success("Person deleted successfully!");
    },
    onError: () => {
      message.error("Error deleting person.");
    },
  });

  const personCars = cars.filter((car) => car.personId === person.id);
  const titleText = `${person.firstName} ${person.lastName}`;

  const handleEditClick = () => {
    setIsModalVisible(true);
  };

  const handleDeleteClick = () => {
    deletePerson();
  };

  //   Handlings in modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdatePerson = () => {
    updatePerson();
  };

  return (
    <>
      <Card title={titleText} className="text-start">
        {personCars.map((car, index) => (
          <CarCard car={car} key={index} />
        ))}
        <div className="flex justify-between mt-6">
          <p className=" text-blue-500 font-medium">Learn more</p>
          <div className="flex gap-16">
            <EditOutlined
              className="text-lg cursor-pointer"
              onClick={handleEditClick}
            />
            <DeleteOutlined
              className="text-red-500 text-lg cursor-pointer"
              onClick={handleDeleteClick}
            />
          </div>
        </div>
      </Card>

      {/* Modal for edit person*/}
      <Modal
        title="Edit Person info"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setIsModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleUpdatePerson}>
            Save
          </Button>,
        ]}
        className="top-[40vh]"
      >
        <div className="flex flex-col gap-6">
          <Input
            labelText="FirstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <Input
            labelText="LastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
      </Modal>
    </>
  );
};

export default PersonCard;
