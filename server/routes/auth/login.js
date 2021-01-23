const { Router } = require("express")
const router = Router()

// const bcrypt = require("bcryptjs")
// const jwt = require("jsonwebtoken")
// const { PASSPORT_SECRET_KEY } = require("../../../utils/config")

// const User = require("../../models/User")

router.get("/login", async (req, res) => {
  
  console.log('--------- NEW request ----------')


  res.send('Hello World')


  // const { email, password } = req.body


  // const candidate = await User.findOne({ email })

  // if (candidate) {
  //   const isMatch = await bcrypt.compare(password, candidate.password)
  //   if (isMatch) {
  //     const token = getToken(candidate)
  //     res.status(201).json({ message: "Успешная авторизация", token })
  //   } else {
  //     res.status(401).json({ message: "Неверный логин или пароль" })
  //   }
  // } else {
  //   res.status(401).json({ message: "Пользователь не зарегистрирован" })
  // }
})

// function getToken(candidate) {
//   const payload = { id: candidate._id, email: candidate.email }
//   const options = { expiresIn: 86400 }
//   return "Bearer " + jwt.sign(payload, PASSPORT_SECRET_KEY, options)
// }

module.exports = router
