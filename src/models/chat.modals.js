import mongoose, {Schema} from "mongoose";

const MessageSchema = new Schema(
  {
    content: String,
  },
  { collection: "Messages", timestamps: true }
);

export default mongoose.model("Messages", MessageSchema);
