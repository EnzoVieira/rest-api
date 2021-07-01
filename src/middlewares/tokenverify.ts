import { decryptJWT } from "../services/token"

export async function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization
  const token = bearerHeader && bearerHeader.split(" ")[1]

  if (!token) {
    return res.status(403).send({ error: "Token not sent" })
  }

  const user = await decryptJWT(token)

  if (user) {
    req.user = user
    next()
  } else {
    return res.status(403).send({ error: "Invalid Token" })
  }
}
