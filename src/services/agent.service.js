import exampleAgent from "../agents/example.agent.js";

const agentService = {
  async process(input) {
    // Bisa dikembangkan multi-agent orchestration di sini
    const response = await exampleAgent.execute(input);
    return response;
  }
};

export default agentService;
