import { Schema, model, Types } from "mongoose"

const schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, required: true },
  owner: { type: Types.ObjectId, ref: "User", required: true },
})

export default model("Place", schema)
