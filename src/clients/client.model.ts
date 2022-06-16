import * as mongoose from 'mongoose';

export const ClientShema = new mongoose.Schema(
  {
    name: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: Number },
  },
  { versionKey: null },
);

export interface Client {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: number;
}
