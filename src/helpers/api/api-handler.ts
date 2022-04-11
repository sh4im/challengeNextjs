import { errorHandler, jwtMiddleware } from "helpers/api";
import { Request, Response, Handler } from "express";
import { RequestHandler } from "express-jwt";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
export { apiHandler };

function apiHandler(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      console.log("authorization", req.headers.authorization);
      // global middleware
      await jwtMiddleware(req, res);
      // route handler
      return await handler(req, res);
    } catch (err) {
      // global error handler
      console.log("this is my error", err);
      errorHandler(err as Error, res);
    }
  };
}
