import { gql } from "@apollo/client";

export const GET_PEOPLE = gql`
  query {
    getPeople {
      id
      firstName
      lastName
    }
  }
`;

export const GET_CARS = gql`
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

export const PERSON_WITH_CARS = gql`
  query personWithCars($id: ID!) {
    personWithCars(id: $id) {
      id
      firstName
      lastName
      cars {
        id
        year
        make
        model
        price
      }
    }
  }
`;
