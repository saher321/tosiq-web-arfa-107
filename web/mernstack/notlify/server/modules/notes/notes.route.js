import express from 'express'
import { list, add } from './notes.controller.js';

const notesRouter = express.Router();

notesRouter.get("/notes", list)
notesRouter.post("/notes/create", add)

export default notesRouter