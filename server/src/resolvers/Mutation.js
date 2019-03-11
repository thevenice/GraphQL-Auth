const { titles } = require("./Query");
let idCount = titles.length;
const Mutation = {
  post: (_, args, context, info) => {
    const title = {
      id: `link-${idCount++}`,
      title: args.title,
      location: args.location
    };
    titles.push(title);
    return title;
  }
};

module.exports = { Mutation };
