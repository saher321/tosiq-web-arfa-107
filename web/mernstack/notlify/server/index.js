import express from 'express'
import notesRouter from './modules/notes/notes.route.js';
import cors from 'cors'
import { connectDB } from './config/db.js';
import authRouter from './modules/auth/auth.route.js';

const PORT = 5000
const app = express();
app.use(express.json())
app.use(cors())

app.use('', authRouter)
app.use('', notesRouter)



app.get('/', (req, res) => {
  return res.send({
    status: true,
    messsage: "Server is started..."
  })
})

connectDB().then( () => {
  app.listen( PORT, () => {
    console.log(`Server is started at http://localhost:${PORT}`)
  })
})