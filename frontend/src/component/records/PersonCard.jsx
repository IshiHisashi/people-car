import React, { useContext, useState, useEffect } from "react";
import CarCard from "./CarCard";
import { Card } from "antd";
import { gql, useQuery } from "@apollo/client";
import { GlobalContext } from "../../context/GlobalContext";

const PersonCard = ({ person }) => {
  const { cars } = useContext(GlobalContext);

  const personCars = cars.filter((car) => car.personId === person.id);
  const titleText = `${person.firstName} ${person.lastName}`;
  return (
    <Card title={titleText} className="text-start">
      {personCars.map((car, index) => (
        <CarCard car={car} key={index} />
      ))}
      <p className="mt-4 text-blue-500 font-medium">Learn more</p>
    </Card>
  );
};

export default PersonCard;
