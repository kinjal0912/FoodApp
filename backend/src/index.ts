import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import restroRouter from "./routes/restaurantRoutes";
import menuRouter from "./routes/menuItemsRoutes";

mongoose
  .connect(process.env.MONGOURI as string)
  .then(() => console.log("Connected to database"));

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/restaurant", restroRouter);
app.use("/api/menu", menuRouter);

app.listen(7000, () => {
  console.log("Server started on localhost:7000");
});
