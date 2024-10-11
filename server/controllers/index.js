const connection = require("../db/db");

const test = (req, res) => {
  res.send("Hello!");
};

const newPost = (req, res) => {
  const post = req.body;

  const query = `
  INSERT INTO posts (id, type, title, author, publishDate, status, content, image)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`;

  const values = [
    post.id,
    post.type,
    post.title,
    post.author,
    post.publishDate,
    post.status,
    post.content,
    post.image,
  ];
  connection.query(query, values, (err, results) => {
    if (err) {
      console.error("Error inserting post:", err);
      res.status(500).json({ error: "Failed to create post" });
    } else {
      console.log("Post created:", results);
      res
        .status(201)
        .json({ message: "Post created successfully", postId: post.id });
    }
  });
};

const getPosts = (req, res) => {
  const query = "SELECT * FROM posts";

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching posts:", err);
      res.status(500).json({ error: "Failed to retrieve posts" });
    } else {
      console.log("Posts retrieved:", results);
      res.status(200).json(results);
    }
  });
};

module.exports = {
  test,
  newPost,
  getPosts,
};
