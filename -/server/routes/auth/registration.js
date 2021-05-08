const { Router } = require("express")
const router = Router()

const getToken = require("../../funcs/getToken")

const User = require("../../models/User")
const createUser = require("../../DatabaseQueries/createUser")

router.post("/registration", async (req, res) => {
  const { email, nickname, password } = req.body

  function chechInput(value, message) {
    if (typeof value !== "string" || value === "") {
      res.status(400).json({
        message,
      })
      return null
    }
  }

  chechInput(email, "Введіть email")
  chechInput(nickname, "Введіть nickname")
  chechInput(password, "Введіть password")

  /** Валідація емайла */
  if (!validateEmail(email)) {
    res.status(400).json({
      message: "Невірний email",
    })
    return null
  }

  if (validateSpace(nickname)) {
    res.status(400).json({
      message: "Нікнейм повинен бути без пробілів",
    })
    return null
  }

  /** Перевірка на повторну реєстрацію */
  const candidateEmail = await User.find({ email })
  const candidateNickName = await User.find({ nickname })

  if (candidateEmail.length !== 0) {
    res.status(400).json({
      message: "Ця електронна адреса вже використовується",
    })
    return null
  }

  if (candidateNickName.length !== 0) {
    res.status(400).json({
      message: "Цей нікнейм вже використовується",
    })
    return null
  }

  /** створення користувача */
  const user = await createUser({ email, password, nickname })

  const token = getToken(user)

  res.status(201).json({
    message: "Успішна реєстрація",
    token,
    userId: user._id,
  })
})

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

function validateSpace(txt) {
  return /\s/.test(txt)
}

module.exports = router
