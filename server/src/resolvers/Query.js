const titles = [
  {
    id: "link-0",
    title: "test post"
  }
];

const Query = {
  test: (_, args, context, info) => `Hello ${args.name || "world"}`,
  feed: () => titles
};

module.exports = { Query };
