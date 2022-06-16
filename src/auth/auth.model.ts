import * as mongoose from 'mongoose';

export const AuthShema = new mongoose.Schema(
  {
    name: { type: String },
    password: { type: String },
  },
  { versionKey: null },
);

export interface Auth {
  id: string;
  name: string;
  password: string;
}
