import jwt from "jsonwebtoken";
import getConfig from "next/config";

import { apiHandler } from "helpers/api";
import { NextApiRequest, NextApiResponse } from "next";
import { login } from "database";

const { serverRuntimeConfig } = getConfig();

export default apiHandler(handler);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      await authenticate();
      return;
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function authenticate() {
    try {
      console.log("get user");
      const user = await login(req.body);
      console.log(user);
      if (!user.active) {
        throw new Error("Ce compte a été bloqué.");
      }
      if (user.password !== req.body.password) {
        throw new Error("Informations de connexion invalides");
      }
      if (!user) throw "Username or password is incorrect";

      // create a jwt token that is valid for 7 days
      const token = jwt.sign({ sub: user.email }, serverRuntimeConfig.secret, {
        expiresIn: "7d",
      });
      console.log(token);
      const t = jwt.verify(token, serverRuntimeConfig.secret);
      console.log(t);
      // return basic user details and token
      return res.status(200).json({
        email: user.email,
        token,
      });
    } catch (e: any) {
      console.log("the error is here", e);
      res.status(400).json({
        error: e.message,
      });
    }
  }
}
