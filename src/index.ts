import express, { json, urlencoded } from "express"

import UserRoutes from "./routes/UserRoutes"

const server = express()
const port = 3000

server.use(json())
server.use(urlencoded({ extended: true }))

server.use("/student/user", UserRoutes)

server.get("/teste", (_, res) => res.send("Hello world!"))

server.listen(port, () => console.log(`Server is running on port ${port}`))
