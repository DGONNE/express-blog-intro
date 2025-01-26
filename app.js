const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.use(express.static("public"));

app.get("/bacheca", (req, res) => {
  res.json(posts);
});

const posts = [
  {
    name: "ciambellone",
    image: "/images/post1.jpg",
    taste_scale: "8/10",
  },
  {
    name: "cracker barbabietola",
    image: "/images/post2.jpg",
    tasta_scale: "4/10",
  },
  {
    name: "pane fritto dolce",
    image: "/images/post3.jpg",
    taste_scale: "8/10",
  },
  {
    name: "pasta barbabietola",
    image: "/images/post4.jpg",
    taste_scale: "5/10",
  },
  {
    name: "torta paesana",
    image: "/images/post5.jpg",
    taste_scale: "7/10",
  },
];

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
