import mongoose, { Schema, Document, Types } from "mongoose";

export interface ICategory extends Document {
  name: string;
  slug: string;
  parentId?: Types.ObjectId | null;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    parentId: { type: Schema.Types.ObjectId, ref: "Category", default: null },
    description: { type: String },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model<ICategory>("Category", CategorySchema);
