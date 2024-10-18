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

const Records = () => {
  const { people, setPeople } = useContext(GlobalContext);
  const { cars, setCars } = useContext(GlobalContext);
  const { loadingPeople, errorPeople, data: dataPeople } = useQuery(GET_PEOPLE);

  useEffect(() => {
    if (dataPeople && dataPeople.getPeople) {
      setPeople(dataPeople.getPeople);
    }
  }, [dataPeople, people, setPeople]);

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
