import { Schema, model } from 'mongoose';

const companySchema = new Schema({
  name: { type: String, required: true, unique: true },
  pros: { type: [String], default: [] },
  cons: { type: [String], default: [] },
  rating: { type: Number, min: 1, max: 5, required: true },
});

export default model('Company', companySchema);
