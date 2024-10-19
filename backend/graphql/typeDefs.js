import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Person {
    id: ID
    firstName: String
    lastName: String
    cars: [Car]
  }

  type Car {
    id: ID
    year: Int
    make: String
    model: String
    price: Float
    personId: ID
  }

  type Query {
    getCars: [Car]
    getCar(id: ID): Car
    getCarsByUserID(personId: ID!): [Car]
    getPeople: [Person]
    getPerson(id: ID): Person
    personWithCars(id: ID!): Person
  }

  type Mutation {
    createCar(
      year: Int
      make: String
      model: String
      price: Float
      personId: ID
    ): Car

    createPerson(firstName: String, lastName: String): Person

    updateCar(
      id: ID!
      year: Int
      make: String
      model: String
      price: Float
      personId: ID
    ): Car

    updatePerson(id: ID!, firstName: String, lastName: String): Person

    deleteCar(id: ID): String
    deletePerson(id: ID): String
  }
`;
