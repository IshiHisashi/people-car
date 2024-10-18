import data from "../data.js";

export const personResolvers = {
  Query: {
    getPeople: () => {
      return data.people;
    },
    getPerson: (_, { id }) => {
      return data.people.find((person) => person.id === id);
    },
  },
  Mutation: {
    createPerson: (_, args) => {
      const newPerson = {
        id: String(data.people.length + 1),
        firstName: args.firstName,
        lastName: args.lastName,
        cars: [],
      };
      data.people.push(newPerson);

      return newPerson;
    },

    updatePerson: (_, args) => {
      const personIndex = data.people.findIndex(
        (person) => person.id === args.id
      );
      if (personIndex === -1) {
        throw new Error(`Person with ID ${args.id} not found`);
      }

      const updatedPerson = {
        ...data.people[personIndex],
        firstName:
          args.firstName !== undefined
            ? args.firstName
            : data.people[personIndex].firstName,
        lastName:
          args.lastName !== undefined
            ? args.lastName
            : data.people[personIndex].lastName,
      };

      data.people[personIndex] = updatedPerson;
      return updatedPerson;
    },

    deletePerson: (_, args) => {
      const { id } = args;
      data.people = data.people.filter((person) => person.id !== id);
      return "deleted";
    },
  },
};
