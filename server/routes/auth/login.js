const { Router } = require("express")
const router = Router()

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { PASSPORT_SECRET_KEY } = require("../../../utils/config")

const User = require("../../models/User")

router.post("/login", async (req, res) => {
  const { email, password } = req.body

  /** валидация */
  if (!email || (typeof email === "string" && email === "")) {
    res.status(401).json({ message: "Введите email" })
  }
  if (typeof email !== "string") {
    res.status(401).json({ message: "Неверный email" })
  }
  if (!password || (typeof password === "string" && password === "")) {
    res.status(401).json({ message: "Введите пароль" })
  }
  if (typeof password !== "string") {
    res.status(401).json({ message: "Пароль должен быть строкой" })
  }

  /** Вход в аккаунт */
  const candidate = await User.findOne({ email })

  if (candidate) {
    const isMatch = await bcrypt.compare(password, candidate.password)
    if (isMatch) {
      const token = getToken(candidate)
      res.status(201).json({ message: "Успешная авторизация", token })
    } else {
      res.status(401).json({ message: "Неверный логин или пароль" })
    }
  } else {
    res.status(401).json({ message: "Пользователь не зарегистрирован" })
  }
})

function getToken(candidate) {
  const payload = { id: candidate._id, email: candidate.email }
  const options = { expiresIn: 86400 }
  return "Bearer " + jwt.sign(payload, PASSPORT_SECRET_KEY, options)
}

module.exports = router
