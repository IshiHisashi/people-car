import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  // Set Express to listen on a specific port
  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000/graphql`)
  );
}

startServer();
