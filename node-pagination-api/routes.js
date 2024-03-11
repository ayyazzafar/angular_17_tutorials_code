// routes.js
const express = require("express");
const router = express.Router();
const db = require("./database");

router.get("/posts", (req, res) => {
  const { page = 1, limit = 10, searchQuery='' } = req.query;
  const offset = (page - 1) * limit;

  db.query(
    "SELECT * FROM blog_posts where title like ? ORDER BY id DESC LIMIT ? OFFSET ?",
     [`%${searchQuery}%`, Number(limit), Number(offset)],
    (err, results) => {
      if (err) {
        console.error("Error fetching blog posts:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      db.query(
        "SELECT COUNT(*) AS total FROM blog_posts",
        (err, countResult) => {
          if (err) {
            console.error("Error counting blog posts:", err);
            res.status(500).json({ error: "Internal server error" });
            return;
          }

          const totalPosts = countResult[0].total;
          const totalPages = Math.ceil(totalPosts / limit);

          res.json({
            posts: results,
            totalPages,
            currentPage: page,
          });
        }
      );
    }
  );
});

module.exports = router;
