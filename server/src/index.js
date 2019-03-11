const { GraphQLServer } = require("graphql-yoga");
const { Query, Mutation } = require("./resolvers/Query");
const resolvers = {
  Query,
  Mutation
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});
// const PORT = "";
server.start(_ =>
  console.log(`your server is running on http://localhost:4000`)
);
