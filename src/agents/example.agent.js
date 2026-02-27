const exampleAgent = {
  async execute(input) {
    return {
      agent: "ExampleAgent",
      received: input,
      output: `Funny processed: ${input}`
    };
  }
};

export default exampleAgent;
