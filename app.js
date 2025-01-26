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
    image: "http://localhost:3000/images/ciambellone.jpeg",
    taste_scale: "8/10",
  },
  {
    name: "cracker barbabietola",
    image: "http://localhost:3000/images/cracker_barbabietola.jpeg",
    tasta_scale: "4/10",
  },
  {
    name: "pane fritto dolce",
    image: "http://localhost:3000/images/pane_fritto_dolce.jpeg",
    taste_scale: "8/10",
  },
  {
    name: "pasta barbabietola",
    image: "http://localhost:3000/images/pasta_barbabietola.jpeg",
    taste_scale: "5/10",
  },
  {
    name: "torta paesana",
    image: "http://localhost:3000/images/torta_paesana.jpeg",
    taste_scale: "7/10",
  },
];

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
