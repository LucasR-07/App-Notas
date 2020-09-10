const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    title: String,
    content: {
      type: String,
      required: true,
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
  },
  {
    // Cada vez que se cree un dato se agregara la fecha de creacion y de modificacion
    timestamps: true,
  }
);

module.exports = model("Note", noteSchema);
