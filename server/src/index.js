const { GraphQLServer } = require("graphql-yoga");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const resolvers = {
  Query,
  Mutation
};

const titles = [
  {
    id: `title-0`,
    title: "new post"
  }
];

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});
// const PORT = "";
server.start(_ =>
  console.log(`your server is running on http://localhost:4000`)
);
module.exports = { titles };
