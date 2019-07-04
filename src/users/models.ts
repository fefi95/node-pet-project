import * as mongoose from 'mongoose';

export interface User {
  id?: string;
  name: string;
  last_name: string;
  email: string;
  avatar: string
}

const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true] },
  last_name: {type: String},
  email: { type: String, unique: true, required: [true] } ,
  avatar: {type: String}
});

export const UserModel = mongoose.model('User', UserSchema);