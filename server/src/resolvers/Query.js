// function Query(parent,args,context,info){
// return context.args.prisma.(test)
// }

const Query = {
  test: (_, args, context, info) => `Hello ${args.name || "world"}`
};
const Mutation = {
  post: (_, args, context, info) =>
    `the name is :${args.name} and email is ${args.email}`
};

module.exports = { Query, Mutation };
