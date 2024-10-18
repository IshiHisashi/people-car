import data from "../data.js";

export const carResolvers = {
  Query: {
    getCars: () => {
      return data.cars;
    },
    getCar: (_, { id }) => {
      return data.cars.find((car) => car.id === id);
    },
    getCarsByUserID: (_, args) => {
      return data.cars.filter((car) => car.personId === args.personId);
    },
  },
  Mutation: {
    createCar: (_, args) => {
      const newCar = {
        ...args.car,
        id: String(data.cars.length + 1),
      };
      data.cars.push(newCar);
    },

    updateCar: (_, args) => {
      const carIndex = data.cars.findIndex((car) => car.id === args.id);
      if (carIndex === -1) {
        throw new Error(`Car with ID ${args.id} not found`);
      }

      const updatedCar = {
        ...data.cars[carIndex],
        year: args.year !== undefined ? args.year : data.cars[carIndex].year,
        make: args.make !== undefined ? args.make : data.cars[carIndex].make,
        model:
          args.model !== undefined ? args.model : data.cars[carIndex].model,
        price:
          args.price !== undefined ? args.price : data.cars[carIndex].price,
        personId:
          args.personId !== undefined
            ? args.personId
            : data.cars[carIndex].personId,
      };
      data.cars[carIndex] = updatedCar;
      return updatedCar;
    },

    deleteCar: (_, args) => {
      const { id } = args;
      data.cars = data.cars.filter((car) => car.id !== id);
      return "deleted";
    },
  },
};
