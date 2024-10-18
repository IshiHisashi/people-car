import React, { useState, useContext } from "react";
import Input from "../common/Input.jsx";
import { Button } from "antd";
import { GlobalContext } from "../../context/GlobalContext.js";
import { gql, useMutation } from "@apollo/client";
import { CREATE_PERSON } from "../../utils/mutations.js";

const PersonForm = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });
  const { people, setPeople } = useContext(GlobalContext);

  const [createPerson, { loading, error }] = useMutation(CREATE_PERSON, {
    refetchQueries: [
      {
        query: gql`
          query {
            getPeople {
              id
              firstName
              lastName
            }
          }
        `,
      },
    ],
    onCompleted: (data) => {
      const newPerson = data.createPerson;
      setPeople([...people, newPerson]);
      setFormData({ firstName: "", lastName: "" });
    },
    onError: (error) => {
      console.error("Error creating person:", error);
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddPerson = () => {
    createPerson({
      variables: {
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <p className="text-3xl font-semibold">Add Person</p>
      <div className="flex gap-4 justify-center">
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
        <Button
          onClick={handleAddPerson}
          disabled={!formData.firstName || !formData.lastName}
        >
          Add Person
        </Button>
      </div>
    </div>
  );
};

export default PersonForm;
