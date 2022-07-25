import cors from 'cors';
import 'dotenv/config';
import express from "express";
import { connectToMongodb } from './db/database';
import { exercisesRouter } from "./routes/exercises";

//CORS config
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const app = express();
app.use(cors(options));
app.use(express.json());
app.use('/api/exercises', exercisesRouter);

connectToMongodb();

console.log(process.env.MONGODB_URI)

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
