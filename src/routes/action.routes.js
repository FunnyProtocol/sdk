import express from "express";
import { handleAction } from "../controllers/action.controller.js";

const router = express.Router();

router.post("/", handleAction);

export default router;
