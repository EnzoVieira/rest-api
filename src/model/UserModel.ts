// import mongoose, { Schema } from "mongoose"
import mongoose from "../config/database"
const Schema = mongoose.Schema

interface IUser {
  name: string
  email: string
  password: string
  createdAt: string
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

const UserModel = mongoose.model("User", UserSchema)

export default UserModel
