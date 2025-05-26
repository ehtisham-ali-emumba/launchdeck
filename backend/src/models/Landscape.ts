import mongoose, { Schema, Document, Types } from "mongoose";

export interface IUser {
  name: string;
  designation: string;
}

export interface ILandscape extends Document {
  name: string;
  slug: string;
  description: string;
  image: string;
  user: IUser;
  categoryId: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
  },
  { _id: false }
);

const LandscapeSchema = new Schema<ILandscape>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    image: { type: String },
    user: { type: UserSchema, required: true },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model<ILandscape>("Landscape", LandscapeSchema);
