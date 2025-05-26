import mongoose, { Schema, Document } from "mongoose";

export interface ITour extends Document {
  name: string;
  city: string;
  description: string;
  price: number;
  duration: number;
  startDate: Date;
  endDate: Date;
  facilities: string[];
  imageSrc: string;
  images: string[];
}

const TourSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  facilities: { type: [String], required: true },
  imageSrc: { type: String, required: true },
  images: { type: [String], required: true },
});

export const TourModel = mongoose.model<ITour>("Tour", TourSchema);
