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
