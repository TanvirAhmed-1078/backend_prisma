// import express, { Application, Request, Response } from "express";
// import cors from "cors";
// import { BaseRouter } from "./app/routes";
// //import globalErrorHandler from "./app/middlewares/globalErrorHandler";
// //import notFoundHandler from "./app/middlewares/notFoundHandler";
// import path from "path";

// const app: Application = express();
// app.use(cors());

// //Parsers
// app.use(express.json());

// // Route
// app.use("/api", BaseRouter);

// app.get("/", (req: Request, res: Response) => {
//   res.send("thsi  server running successfully!");
//   //res.sendFile(path.join(__dirname, "../index.html"));
// });

// // Global error handler
// //app.use(globalErrorHandler);

// //Handling not found
// //app.use(notFoundHandler);

// export default app;

// app.ts
import express from "express";
import cors from "cors";
import { UserRouter } from "./app/modules/user/user.route";
import cookieParser from "cookie-parser";
import notFoundHandler from "./app/middlewares/notFoundHandler";
import { BaseRouter } from "./app/routes";

// path adjust করো

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Mount user routes
app.use("/api", BaseRouter);

app.get("/", (req, res) => {
  res.send("Server running successfully!");
});

//Handling not found
app.use(notFoundHandler);

// Global error handler
//app.use(globalErrorHandler);

export default app;
