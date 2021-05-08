const { Router } = require("express")
const router = Router()

const bcrypt = require("bcryptjs")
const getToken = require("../../funcs/getToken")

const User = require("../../models/User")

router.post("/login", async (req, res) => {
  const { email, password } = req.body

  /** валидация */
  if (!email || (typeof email === "string" && email === "")) {
    res.status(401).json({ message: "Введіть email" })
  }
  if (typeof email !== "string") {
    res.status(401).json({ message: "Невірний email" })
  }
  if (!password || (typeof password === "string" && password === "")) {
    res.status(401).json({ message: "Введіть пароль" })
  }
  if (typeof password !== "string") {
    res.status(401).json({ message: "Пароль повинен бути текстовим" })
  }

  /** Вход в аккаунт */
  const candidate = await User.findOne({ email })

  if (candidate) {
    const isMatch = await bcrypt.compare(password, candidate.password)
    if (isMatch) {
      const token = getToken(candidate)
      res.status(201).json({
        message: "Успішна авторизація",
        token,
        user: {
          nickname: candidate.nickname,
          _id: candidate._id,
          email: candidate.email,
        },
      })
    } else {
      res.status(401).json({ message: "Невірний логін або пароль" })
    }
  } else {
    res.status(401).json({ message: `Користувач ${email} не зареєстрований` })
  }
})

module.exports = router
