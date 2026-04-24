// pkgs: express, nodemon, dotenv, jsonwebtoken, nanoid, nodemailer
// express  => creates urls
// nodemon  => server is automatic restart
// dotenv   => creates .env file :: APP_NAME = Notify
// nanoid   => generates a random data (otp : 340291089)
// jsonwebtoken => unique string :: user info
// bcryptjs => password: ali123 => $dfwhfwfw.3d212d213d.d3d22
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

const colors = [
    {id: 982, code: "#33d"},
    {id: 4392, code: "#41d"},
    {id: 10323, code: "#63d"},
]
app.get('/house-colors', (req, res) => {
    return res.send({
        status: true,
        houseColors: colors
    })
})

app.listen( PORT, () => {
  console.log(`Server is started at http://localhost:${PORT}`)
})
