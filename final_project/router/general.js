const express = require("express");
const axios = require("axios");

const books = require("./booksdb.js");
const isValid = require("./auth_users.js").isValid;
const users = require("./auth_users.js").users;

const public_users = express.Router();
const BASE_URL = process.env.BOOK_API_BASE_URL || "http://localhost:5000";

public_users.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Unable to register user." });
  }

  if (isValid(username)) {
    return res.status(409).json({ message: "User already exists!" });
  }

  users.push({ username, password });
  return res.status(200).json({
    message: "User successfully registered. Now you can login"
  });
});

public_users.get("/", (req, res) => {
  return res.json(books);
});

public_users.get("/isbn/:isbn", (req, res) => {
  const book = books[req.params.isbn];

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  return res.json(book);
});

public_users.get("/author/:author", (req, res) => {
  const author = decodeURIComponent(req.params.author).toLowerCase();

  const results = Object.values(books).filter(
    (book) => book.author.toLowerCase() === author
  );

  return res.json(results);
});

public_users.get("/title/:title", (req, res) => {
  const title = decodeURIComponent(req.params.title).toLowerCase();

  const results = Object.values(books).filter(
    (book) => book.title.toLowerCase() === title
  );

  return res.json(results);
});

public_users.get("/review/:isbn", (req, res) => {
  const book = books[req.params.isbn];

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  return res.json(book.reviews);
});

// Required four Node.js methods: Async/Await + Axios.
async function getAllBooks() {
  const response = await axios.get(`${BASE_URL}/`);
  return response.data;
}

async function getBooksByISBN(isbn) {
  const response = await axios.get(
    `${BASE_URL}/isbn/${encodeURIComponent(isbn)}`
  );
  return response.data;
}

async function getBooksByAuthor(author) {
  const response = await axios.get(
    `${BASE_URL}/author/${encodeURIComponent(author)}`
  );
  return response.data;
}

async function getBooksByTitle(title) {
  const response = await axios.get(
    `${BASE_URL}/title/${encodeURIComponent(title)}`
  );
  return response.data;
}

module.exports.general = public_users;
module.exports.getAllBooks = getAllBooks;
module.exports.getBooksByISBN = getBooksByISBN;
module.exports.getBooksByAuthor = getBooksByAuthor;
module.exports.getBooksByTitle = getBooksByTitle;
