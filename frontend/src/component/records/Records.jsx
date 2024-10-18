import React, { useContext, useEffect } from "react";
import PersonCard from "./PersonCard";
import { GlobalContext } from "../../context/GlobalContext.js";
import { gql, useQuery } from "@apollo/client";

const GET_PEOPLE = gql`
  query {
    getPeople {
      id
      firstName
      lastName
    }
  }
`;

const GET_CARS = gql`
  query {
    getCars {
      id
      make
      model
      year
      price
      personId
    }
  }
`;

const Records = () => {
  const { people, setPeople } = useContext(GlobalContext);
  const { cars, setCars } = useContext(GlobalContext);
  const {
    loading: loadingPeople,
    error: errorPeople,
    data: dataPeople,
  } = useQuery(GET_PEOPLE);

  const {
    loading: loadingCars,
    error: errorCars,
    data: dataCars,
  } = useQuery(GET_CARS);

  useEffect(() => {
    console.log("exe people retrieval");
    if (dataPeople && dataPeople.getPeople) {
      setPeople(dataPeople.getPeople);
    }
  }, [dataPeople, people, setPeople]);

  useEffect(() => {
    console.log("exe car retrieval");
    if (dataCars && dataCars.getCars) {
      setCars(dataCars.getCars);
    }
  }, [dataCars, cars, setCars]);

  return (
    <div className="flex flex-col gap-6">
      <p className="text-3xl font-semibold">Records</p>
      {people.map((person, index) => (
        <PersonCard person={person} key={index} />
      ))}
    </div>
  );
};

export default Records;
