const Mutation = {
  post: (_, args, context, info) =>
    `${args.description} and
    ${args.createdBy}
    ${args.location}

    `
};

module.exports = { Mutation };
