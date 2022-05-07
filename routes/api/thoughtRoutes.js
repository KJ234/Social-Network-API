const router = require("express").Router;

const {
  getAllThoughts,
  getThoughtsByID,
  createNewThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("./../../controllers/ThoughtController");

router.route("/").get(getAllThoughts).post(createNewThought);

router
  .route(":id")
  .get(getThoughtsByID)
  .put(updateThought)
  .delete(deleteThought);

router.route(":thoughtId/reactions").post(addReaction).delete(deleteReaction);
