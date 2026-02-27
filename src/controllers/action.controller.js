import agentService from "../services/agent.service.js";
import { successResponse, errorResponse } from "../utils/response.js";

export const handleAction = async (req, res) => {
  try {
    const { input } = req.body;

    if (!input) {
      return errorResponse(res, "Input is required", 400);
    }

    const result = await agentService.process(input);

    return successResponse(res, result);
  } catch (error) {
    return errorResponse(res, error.message, 500);
  }
};
