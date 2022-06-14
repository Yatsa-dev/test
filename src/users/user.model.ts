import * as mongoose from 'mongoose';

export const UserShema = new mongoose.Schema(
  {
    name: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: Number },
  },
  { versionKey: null },
);

export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: number;
}
