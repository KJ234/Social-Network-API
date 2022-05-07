const router = require("express").Router();
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/courses
router.route("/").get(getAllUsers).post(createUser);

// -- Directs to: /api/users/:id <GET, PUT, DELETE>
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// -- Directs to: /api/users/:userId/friends/:friendId <POST, DELETE>
router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
