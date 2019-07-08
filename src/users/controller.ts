import { UserModel, User } from "./models";

export async function addUser(user: User): Promise<User> {
  const userInstance = new UserModel(user);
  return userInstance.save();
}

export async function getAllUsers(): Promise<User> {
  return await UserModel.find().exec();
}

export async function deleteUser(id: string): Promise<User> {
  return UserModel.deleteOne({ _id: id });
}

export async function login(email: string, password: string): Promise<string> {
  const user = await UserModel.findOne({email: email, password: password}).exec();
  if (user === null){
    throw("The email or the password is wrong")
  }
  console.log(user);
  return "token";
}