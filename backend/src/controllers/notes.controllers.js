const notesCtrl = {};

const NoteModel = require("../models/Note");
const Note = require("../models/Note");

notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

notesCtrl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
};

notesCtrl.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title,
    content,
    date,
    author,
  });
  await newNote.save();
  res.json({ message: "Note saved" });
};

notesCtrl.updateNote = async (req, res) => {
  const { title, author, date, content } = req.body;
  await Note.findByIdAndUpdate(req.params.id, {
    title,
    author,
    date,
    content,
  });

  res.json({ message: "Note Update" });
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note Eliminated" });
};

module.exports = notesCtrl;
