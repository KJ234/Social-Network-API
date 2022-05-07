const router = require("express").Router();
const {
  getAllUsers,
  getUsersByID,
  createNewUsers,
  updateUsers,
  deleteUsers,
  addFriend,
  deleteFriends,
} = require("../../controllers/userController");

// /api/courses
router.route("/").get(getAllUsers).post(createNewUsers);

// -- Directs to: /api/users/:id <GET, PUT, DELETE>
router.route("/:id").get(getUsersByID).put(updateUsers).delete(deleteUsers);

// -- Directs to: /api/users/:userId/friends/:friendId <POST, DELETE>
router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriends);

module.exports = router;
