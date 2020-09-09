const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({ message: {} });

notesCtrl.getNote = (req, res) => res.json({ title: "nota test" });

notesCtrl.createNote = (req, res) => res.json({ message: "Note Created" });

notesCtrl.updateNote = (req, res) => res.json({ message: "Note Update" });

notesCtrl.deleteNote = (req, res) => res.json({ message: "Note Eliminated" });

module.exports = notesCtrl;
