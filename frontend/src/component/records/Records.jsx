import React, { useContext, useEffect } from "react";
import PersonCard from "./PersonCard";
import { GlobalContext } from "../../context/GlobalContext.js";
import { useQuery } from "@apollo/client";
import { GET_PEOPLE, GET_CARS } from "../../utils/queries";

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
