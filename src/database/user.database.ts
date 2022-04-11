import { LoginInputView } from "../views/login/login-input.view";
import { UserModel } from "../models/user.model";
import { db } from "./database";
import { Level } from "level";
import data from "./data.json";

const emails: UserModel[] = data.users as any;

export const userDB = new Level("./users-db");
async function initializeRecords() {
  console.log("status");
  console.log(userDB.status);
  try {
    await userDB.open();
    console.log("opened");
  } catch (e) {
    console.log(e);
  }
  try {
    console.log(userDB.status);
    console.log("opened");
  } catch (e) {
    console.log(e);
  }

  await userDB.batch(
    emails.map((email) => ({
      type: "put",
      key: email.email,
      value: email,
      valueEncoding: "json",
    })),
    { valueEncoding: "json" }
  );
  console.log("records added");
}

export async function getUserDatabase() {
  if (userDB.status !== "open") {
    await initializeRecords();
  }
  return userDB;
}

export async function login(info: LoginInputView): Promise<UserModel> {
  console.log(info);
  const userDB = await getUserDatabase();
  console.log("database intialized");
  let user: UserModel;
  try {
    user = JSON.parse(await userDB.get(info.email));
  } catch (error) {
    throw new Error("User not found");
  }
  return user;
}
