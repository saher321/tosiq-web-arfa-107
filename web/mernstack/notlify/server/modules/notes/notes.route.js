import express from 'express'
import { list, add, deleteNote } from './notes.controller.js';

const notesRouter = express.Router();

notesRouter.get("/notes", list)
notesRouter.post("/notes/create", add)
notesRouter.delete("/notes/delete/:id", deleteNote)

export default notesRouter