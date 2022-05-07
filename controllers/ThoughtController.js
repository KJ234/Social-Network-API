const { Reaction, Thought, User } = require("../models");

const thoughtController = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
};
