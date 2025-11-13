import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs"); 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let posts = []; 

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.get("/new", (req, res) => {
  res.render("new-post.ejs");
});

app.post("/new", (req, res) => {
  const { title, content } = req.body;
  const id = Date.now().toString();
  posts.push({ id, title, content });
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  if (!post) return res.send("Page not found");
  res.render("edit-post.ejs", { post }); 
});

app.post("/edit/:id", (req, res) => { 
  const post = posts.find((p) => p.id === req.params.id);
  if (post) {
    post.title = req.body.title;
    post.content = req.body.content;
  }
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  posts = posts.filter((p) => p.id !== req.params.id);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
