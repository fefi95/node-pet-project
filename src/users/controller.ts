import { UserModel, User } from "./models";

export async function addUser(user: User): Promise<User> {
  const userInstance = new UserModel(user);
  return userInstance.save();
}

export async function getAllUsers(): Promise<User> {
  return await UserModel.find().exec();
}