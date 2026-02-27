import express from "express";
import cors from "cors";
import actionRoutes from "./routes/action.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Funny API 🚀" });
});

app.use("/api/v1/action", actionRoutes);

export default app;
