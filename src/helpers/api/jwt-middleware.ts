import expressJwt from "express-jwt";
import { promisify } from "util";
import getConfig from "next/config";
import { NextApiRequest, NextApiResponse } from "next";

const { serverRuntimeConfig } = getConfig();

export { jwtMiddleware };

const jwtMiddleware = (req: NextApiRequest, res: NextApiResponse) => {
  const middleware = expressJwt({
    secret: serverRuntimeConfig.secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      // public routes that don't require authentication
      "/api/users/authenticate",
    ],
  });

  return promisify(middleware)(req as any, res as any);
};
