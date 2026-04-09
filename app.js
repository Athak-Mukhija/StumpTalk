import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Set EJS
app.set("view engine", "ejs");

// Temporary in-memory posts
let posts = [];

// HOME ROUTE
app.get("/", (req, res) => {
  res.render("home", { posts });
});

app.get("/new", (req, res) => {
  res.render("new");
});


app.post("/new", (req, res) => {
  const { title, content, category } = req.body;

  const newPost = {
    id: Date.now(),
    title,
    content,
    category,
    date: new Date().toLocaleDateString()
  };

  posts.unshift(newPost); // latest post on top

  res.redirect("/");
});



// VIEW FULL POST
app.get("/post/:id", (req, res) => {
  const postId = Number(req.params.id);

  const foundPost = posts.find(post => post.id === postId);

  if (!foundPost) {
    return res.send("Post not found ❌");
  }

  res.render("post", { post: foundPost });
});

// DELETE POST
app.post("/delete/:id", (req, res) => {
  const postId = req.params.id;

  posts = posts.filter(post => post.id != postId);

  res.redirect("/");
});

// EDIT FORM PAGE
app.get("/edit/:id", (req, res) => {
  const postId = req.params.id;

  const foundPost = posts.find(post => post.id == postId);

  if (!foundPost) {
    return res.send("Post not found ❌");
  }

  res.render("edit", { post: foundPost });
});

// UPDATE POST
app.post("/edit/:id", (req, res) => {
  const postId = req.params.id;
  const { title, content, category } = req.body;

  const post = posts.find(post => post.id == postId);

  if (post) {
    post.title = title;
    post.content = content;
    post.category = category;
  }

  res.redirect("/post/" + postId);
});

// Start server
app.listen(PORT, () => {
  console.log(`🏏 StumpTalk running on http://localhost:${PORT}`);
});


