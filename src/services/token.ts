import JWT from "jsonwebtoken"

const secret = "githubsecret"

export function generateJWT(user: any) {
  const token = JWT.sign(JSON.stringify(user), secret)

  return token
}

export function decryptJWT(token: string) {
  return new Promise((resolve, reject) => {
    JWT.verify(token, secret, (error: Error, decoded: any) => {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        resolve(decoded)
      }
    })
  })
}
