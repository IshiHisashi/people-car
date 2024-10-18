import { gql } from "@apollo/client";

export const CREATE_PERSON = gql`
  mutation createPerson($firstName: String!, $lastName: String!) {
    createPerson(firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;

export const CREATE_CAR = gql`
  mutation createCar(
    $year: Int!
    $make: String!
    $model: String!
    $price: Float!
    $personId: ID!
  ) {
    createCar(
      year: $year
      make: $make
      model: $model
      price: $price
      personId: $personId
    ) {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

export const UPDATE_PERSON = gql`
  mutation updatePerson($id: ID!, $firstName: String, $lastName: String) {
    updatePerson(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;

export const UPDATE_CAR = gql`
  mutation updateCar(
    $id: ID!
    $year: Int
    $make: String
    $model: String
    $price: Float
    $personId: ID
  ) {
    updateCar(
      id: $id
      year: $year
      make: $make
      model: $model
      price: $price
      personId: $personId
    ) {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

export const DELETE_PERSON = gql`
  mutation DeletePerson($id: ID!) {
    deletePerson(id: $id)
  }
`;

export const DELETE_CAR = gql`
  mutation DeleteCar($id: ID!) {
    deleteCar(id: $id)
  }
`;
