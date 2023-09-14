const express = require("express");

const app = express();

const port = 5000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const getMovies = (req, res) => {
  res.json(movies);
};

app.get("/api/movies", getMovies);

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  const movie = movies.find((movie) => movie.id === id);

  if (movie != null) {
    res.json(movie);
  } else {
    res.status(404).send("Not Found");
  }
};

app.get("/api/movies/:id", getMovieById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

//   app.get('/api/products/:productID', (req, res) => {
//     const id = Number(req.params.productID)
//     const product = products.find(product => product.id === id)

//         if (!product) {
//         return res.status(404).send('Product not found')
//     }
//     res.json(product)
// }
// )