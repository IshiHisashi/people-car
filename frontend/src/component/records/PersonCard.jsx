import React, { useContext, useState, useEffect } from "react";
import CarCard from "./CarCard";
import { Card } from "antd";
import { gql, useQuery } from "@apollo/client";

const GET_CARS_BY_USER_ID = gql`
  query getCarsByUserID($personId: ID!) {
    getCarsByUserID(personId: $personId) {
      id
      make
      model
      year
      price
    }
  }
`;

const PersonCard = ({ person }) => {
  const [cars, setCars] = useState([]);
  const {
    loading: loadingCars,
    error: errorCars,
    data: carsData,
  } = useQuery(GET_CARS_BY_USER_ID, {
    variables: { personId: person.id },
  });

  useEffect(() => {
    if (carsData && carsData.getCarsByUserID) {
      setCars(carsData.getCarsByUserID);
    }
  }, [carsData, setCars]);

  const titleText = `${person.firstName} ${person.lastName}`;
  return (
    <Card title={titleText} className="text-start">
      {cars.map((car) => (
        <CarCard car={car} />
      ))}
      <p className="mt-4 text-blue-500 font-medium">Learn more</p>
    </Card>
  );
};

export default PersonCard;
