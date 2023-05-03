import express from "express";
import { Request, Response } from "express";

const API = express();

API.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    msg: "API is up",
    data: null,
  });
});

API.get("/error", (req: Request, res: Response) => {
  res.status(500).json({
    msg: "API is down",
    data: null,
  });
});

API.get("/crash", (req: Request, res: Response) => {
  throw new Error("api has crashed");
});

export const server = API.listen(8080, () => {
  console.log("server started on port 8080");
});

API.get(
  "/log", 
  (req: Request, res: Response) => {
    console.info("api is logging something");
    console.log("api is judtt logging");
    console.info(
      JSON.stringify({
        msg: "api is logging structured info",
          some_key: "some_value",
      })
    )
  }
);

export default API;

