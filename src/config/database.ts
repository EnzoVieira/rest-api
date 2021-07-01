import mongoose from "mongoose"

const url = "mongodb://127.0.0.1:27017/exemple"

mongoose.Promise = global.Promise
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Data base connected!")
  }
)

export default mongoose
