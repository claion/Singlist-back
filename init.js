import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/User";
import "./models/Song";
import "./models/Event";
import "./models/Recommend";

const PORT = process.env.PORT;

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
