import express from 'express'
import notesRouter from './modules/notes/notes.route.js';

const app = express();

const PORT= 5000

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