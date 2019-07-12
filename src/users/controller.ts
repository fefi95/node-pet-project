import { UserModel, User } from "./models";
import * as jwt from "jwt-simple";

export async function addUser(user: User): Promise<any> {
  const userInstance = new UserModel(user);
  return userInstance.save();
}

export async function getAllUsers(): Promise<any> {
  return await UserModel.find().exec();
}

export async function deleteUser(id: string): Promise<any> {
  return UserModel.deleteOne({ _id: id });
}

export async function ifUserExistsLogin(email: string, password: string): Promise<string> {
  const user = await UserModel.findOne({email: email, password: password}).exec();
  return login(user);
}

export function login(user) {
  if (user === null){
    throw("The email or the password is wrong");
  }
  return jwt.encode({sub: user._id}, "TOKEN_SECRET");
}