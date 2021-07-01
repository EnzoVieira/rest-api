import UserModel from "../model/UserModel"

import { generateJWT } from "../services/token"

class User {
  public async register(req, res) {
    await UserModel.create({
      name: "Exemple",
      password: "password",
      email: "email@email.com",
    })
      .then(newUser => {
        const user = newUser.toJSON()
        // user.password = undefined

        const token = generateJWT(user)

        return res.status(200).json({ user, token })
      })
      .catch(error => {
        return res
          .status(400)
          .send({ error: "Something wrong", message: error })
      })
  }

  public async authenticate(req, res) {
    const email = req.body.email

    const user = await UserModel.findOne({ email })

    const token = generateJWT(user)

    return res.status(200).send({ user, token })
  }

  public async editUser(req, res) {
    const filter = { email: req.body.email }
    const update = { ...req.body }

    const user = await UserModel.findOneAndUpdate(filter, update, {
      new: true,
    })

    return res.status(200).send({ user })
  }
}

export const UserController = new User()
