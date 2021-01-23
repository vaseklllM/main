module.exports = function (app) {
  app.use("/api/auth", require("./auth/login")) // вход в акканут
  app.use("/api/auth", require("./auth/unauthorized")) // пользователь не авторизирован
  app.use("/api/auth", require("./auth/getUsers")) // вход в акканут
  app.use("/api/auth", require("./auth/getActiveUserData")) // вход в акканут
}
