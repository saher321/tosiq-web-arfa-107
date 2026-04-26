import express from 'express'
import notesRouter from './modules/notes/notes.route.js';
import cors from 'cors'

const PORT = 5000
const app = express();
app.use(cors())

app.use('', notesRouter)



app.get('/', (req, res) => {
  return res.send({
    status: true,
    messsage: "Server is started..."
  })
})

app.listen( PORT, () => {
  console.log(`Server is started at http://localhost:${PORT}`)
})