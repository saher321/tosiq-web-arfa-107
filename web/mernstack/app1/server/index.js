// pkgs: express, nodemon, dotenv, jsonwebtoken, nanoid, nodemailer
// express  => creates urls
// nodemon  => server is automatic restart
// dotenv   => creates .env file :: APP_NAME = Notify
// nanoid   => generates a random data (otp : 340291089)
// jsonwebtoken => unique string :: user info
// nodemailer   => to send email to any user

import express from 'express'

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  return res.send({
    status: true,
    message: "Server is running..."
  })
})

app.listen( PORT, () => {
  console.log(`Server is started at http://localhost:${PORT}`)
})