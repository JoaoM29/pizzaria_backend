import cors from 'cors';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use((err: Error, req:Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }
  return res.status(500).json({
    message: "Internal Server Error",
  });
});

const PORT = process.env.PORT! || 3333;

app.listen(PORT, () => {
  console.log("Servidor online na porta", PORT);
});