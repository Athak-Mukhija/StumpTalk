import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import pkg from "pg";
import bcrypt from "bcrypt";
import connectPgSimple from "connect-pg-simple";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";


const PGStore = connectPgSimple(session);

const app = express();
const PORT = process.env.PORT || 5000;

// 🔌 PostgreSQL setup
const { Pool } = pkg;

const isProduction = process.env.DATABASE_URL;

const pool = new Pool(
  isProduction
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
      }
    : {
        user: "postgres",
        host: "localhost",
        database: "stumptalk",
        password: "athak123",
        port: 5432,
      }
);
export default pool;

// 🧠 Session store
const PgSession = connectPgSimple(session);

app.use(session({
  store: new PgSession({
  pool: pool,
  tableName: "session",
  createTableIfMissing: true   // ✅ ADD THIS LINE
}),
  secret: "secret123",
  resave: false,
  saveUninitialized: false
}));


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// 🔐 Auth middleware
function isAuthenticated(req, res, next) {
  if (req.session.userId) return next();
  res.redirect("/login");
}


app.use(async (req, res, next) => {
  if (req.session.userId) {
    const result = await pool.query(
      "SELECT username FROM users WHERE id=$1",
      [req.session.userId]
    );

    res.locals.username = result.rows[0]?.username;
    res.locals.currentUserId = req.session.userId;
  } else {
    res.locals.username = null;
    res.locals.currentUserId = null;
  }

  next();
});
// ====================== ROUTES ======================



// 🏠 HOME
app.get("/", isAuthenticated, async (req, res) => {
  const result = await pool.query(`
    SELECT posts.*, users.username 
    FROM posts
    JOIN users ON posts.user_id = users.id
    ORDER BY created_at DESC
  `);
const likesResult = await pool.query(
  "SELECT post_id FROM likes WHERE user_id=$1",
  [req.session.userId]
);

const likedPosts = likesResult.rows.map(row => row.post_id);

  const totalPosts = result.rows.length; // ✅ ADD THIS

  res.render("home", {
    posts: result.rows,
    currentUserId: req.session.userId,
    totalPosts,           // ✅ PASS THIS
    likedPosts              // ✅ PASS THIS
  });
});

// 🔍 EXPLORE
app.get("/explore", isAuthenticated, async (req, res) => {
  const result = await pool.query(`
    SELECT posts.*, users.username
    FROM posts
    JOIN users ON posts.user_id = users.id
    ORDER BY created_at DESC
  `);

  res.render("explore", {
    posts: result.rows
  });
});

// 🆕 NEW POST PAGE
app.get("/new", isAuthenticated, (req, res) => {
  res.render("new");
});

// ➕ CREATE POST
app.post("/new", isAuthenticated, async (req, res) => {
  const { title, content, category } = req.body;

  await pool.query(
    "INSERT INTO posts (title, content, category, user_id) VALUES ($1, $2, $3, $4)",
    [title, content, category, req.session.userId]
  );

  res.redirect("/");
});

// 📄 VIEW POST
app.get("/post/:id", async (req, res) => {
  const result = await pool.query(`
    SELECT posts.*, users.username
    FROM posts
    JOIN users ON posts.user_id = users.id
    WHERE posts.id = $1
  `, [req.params.id]);

  const post = result.rows[0];

  if (!post) return res.send("Post not found ❌");

  res.render("post", {
    post,
    currentUserId: req.session.userId
  });
});

// ✏️ EDIT PAGE
app.get("/edit/:id", isAuthenticated, async (req, res) => {
  const result = await pool.query("SELECT * FROM posts WHERE id=$1", [req.params.id]);
  const post = result.rows[0];

  if (!post) return res.send("Post not found ❌");

  if (post.user_id !== req.session.userId) {
    return res.send("Not allowed ❌");
  }

  res.render("edit", { post });
});

// 🔄 UPDATE POST
app.post("/edit/:id", isAuthenticated, async (req, res) => {
  const { title, content, category } = req.body;

  const result = await pool.query("SELECT * FROM posts WHERE id=$1", [req.params.id]);
  const post = result.rows[0];

  if (post.user_id !== req.session.userId) {
    return res.send("Not allowed ❌");
  }

  await pool.query(
    "UPDATE posts SET title=$1, content=$2, category=$3 WHERE id=$4",
    [title, content, category, req.params.id]
  );

  res.redirect("/post/" + req.params.id);
});

// ❌ DELETE POST
app.post("/delete/:id", isAuthenticated, async (req, res) => {
  const result = await pool.query("SELECT * FROM posts WHERE id=$1", [req.params.id]);
  const post = result.rows[0];

  if (post.user_id !== req.session.userId) {
    return res.send("Not allowed ❌");
  }

  await pool.query("DELETE FROM posts WHERE id=$1", [req.params.id]);

  res.redirect("/");
});

// ================= AUTH =================

// 📝 REGISTER PAGE
app.get("/register", (req, res) => {
  res.render("register");
});

// 📝 REGISTER LOGIC
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2)",
      [username, hashed]
    );

    console.log("USER REGISTERED:", username);

    res.redirect("/login");

  } catch (err) {
    console.log("REGISTER ERROR:", err);

    if (err.code === "23505") {
      return res.send("Username already exists ❌");
    }

    res.send("Something went wrong ❌");
  }
});


// 🔐 LOGIN PAGE
app.get("/login", (req, res) => {
  res.render("login");
});


// 🔐 LOGIN LOGIC
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE username=$1",
      [username]
    );

    if (result.rows.length === 0) {
      return res.send("User not found ❌");
    }

    const user = result.rows[0];

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.send("Wrong password ❌");
    }

    // ✅ STORE SESSION PROPERLY
    req.session.userId = user.id;
    req.session.username = user.username;

    console.log("LOGIN SUCCESS:", req.session);

    res.redirect("/");

  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.send("Server error ❌");
  }
});


// 🚪 LOGOUT
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("LOGOUT ERROR:", err);
    }
    res.redirect("/login");
  });
});

app.set("trust proxy", 1); // 👈 VERY IMPORTANT for Render

app.use(session({
  store: new PGStore({
    pool: pool,
    tableName: "session"
  }),
  secret: "secret-key",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,        // 🔥 required on Render
    httpOnly: true,
    sameSite: "none"     // 🔥 required
  }
}));

app.post("/like/:id", isAuthenticated, async (req, res) => {
  const userId = req.session.userId;
  const postId = req.params.id;

  try {
    // check if already liked
    const result = await pool.query(
      "SELECT * FROM likes WHERE user_id=$1 AND post_id=$2",
      [userId, postId]
    );

    if (result.rows.length > 0) {
      // ❌ already liked → remove like
      await pool.query(
        "DELETE FROM likes WHERE user_id=$1 AND post_id=$2",
        [userId, postId]
      );

      await pool.query(
        "UPDATE posts SET likes = likes - 1 WHERE id=$1",
        [postId]
      );
    } else {
      // ✅ new like
      await pool.query(
        "INSERT INTO likes (user_id, post_id) VALUES ($1,$2)",
        [userId, postId]
      );

      await pool.query(
        "UPDATE posts SET likes = likes + 1 WHERE id=$1",
        [postId]
      );
    }

    res.redirect("/");
  } catch (err) {
    console.log("LIKE ERROR:", err);
    res.send("Error liking post");
  }
});

// ================= START =================
app.listen(PORT, () => {
  console.log(`🏏 StumpTalk running on http://localhost:${PORT}`);
});