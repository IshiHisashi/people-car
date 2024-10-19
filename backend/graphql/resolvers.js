import { carResolvers } from "./carResolvers.js";
import { personResolvers } from "./personResolvers.js";

const resolvers = {
  Query: {
    ...carResolvers.Query,
    ...personResolvers.Query,
  },
  Mutation: {
    ...carResolvers.Mutation,
    ...personResolvers.Mutation,
  },
};

export default resolvers;
