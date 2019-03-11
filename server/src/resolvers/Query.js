// function Query(parent,args,context,info){
// return context.args.prisma.(test)
// }

const Query = {
  test: (_, args, context, info) => `Hello ${args.name || "world"}`
};

module.exports = { Query };
