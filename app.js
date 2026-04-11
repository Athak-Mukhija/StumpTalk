import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

let posts = [];


let isLoggedIn = false;

app.get("/", (req, res) => {
  if (!isLoggedIn) {
    return res.redirect("/login");
  }
  res.render("home", { posts });
});


app.get("/new", (req, res) => {
  res.render("new");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    isLoggedIn = true;
    res.redirect("/");
  } else {
    res.send("Invalid Credentials ❌");
  }
});

app.get("/explore", (req, res) => {
  res.render("explore", { posts });
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


