# Final Project Submission Evidence

Repository:
https://github.com/shivamcode2030/expressBookReview

Verified repository relationship:
- fork: true
- parent: ibm-developer-skills-network/expressBookReviews

## Task 1 — getallbooks

Command:
```
curl http://localhost:5000/
```

Output:
```
{"1":{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}},"2":{"author":"Hans Christian Andersen","title":"Fairy tales","reviews":{}},"3":{"author":"Dante Alighieri","title":"The Divine Comedy","reviews":{}},"4":{"author":"Unknown","title":"The Epic Of Gilgamesh","reviews":{}},"5":{"author":"Unknown","title":"The Book Of Job","reviews":{}},"6":{"author":"Unknown","title":"One Thousand and One Nights","reviews":{}},"7":{"author":"Unknown","title":"Njál's Saga","reviews":{}},"8":{"author":"Jane Austen","title":"Pride and Prejudice","reviews":{}},"9":{"author":"Honoré de Balzac","title":"Le Père Goriot","reviews":{}},"10":{"author":"Samuel Beckett","title":"Molloy, Malone Dies, The Unnamable, the trilogy","reviews":{}}}
```

## Task 2 — getbooksbyISBN

Command:
```
curl http://localhost:5000/isbn/8
```

Output:
```
{"author":"Jane Austen","title":"Pride and Prejudice","reviews":{}}
```

## Task 3 — getbooksbyauthor

Command:
```
curl "http://localhost:5000/author/Jane%20Austen"
```

Output:
```
[{"author":"Jane Austen","title":"Pride and Prejudice","reviews":{}}]
```

## Task 4 — getbooksbytitle

Command:
```
curl "http://localhost:5000/title/Pride%20and%20Prejudice"
```

Output:
```
[{"author":"Jane Austen","title":"Pride and Prejudice","reviews":{}}]
```

## Task 5 — getbookreview

Command:
```
curl http://localhost:5000/review/8
```

Output:
```
{}
```

## Task 6 — register

Command:
```
curl -X POST http://localhost:5000/register -H "Content-Type: application/json" -d "{\"username\":\"shivam\",\"password\":\"pass123\"}"
```

Output:
```
{"message":"User successfully registered. Now you can login"}
```

## Task 7 — login

Command:
```
curl -X POST http://localhost:5000/customer/login -H "Content-Type: application/json" -c cookies.txt -d "{\"username\":\"shivam\",\"password\":\"pass123\"}"
```

Output:
```
User successfully logged in
```

## Task 8 — reviewadded

Command:
```
curl -X PUT "http://localhost:5000/customer/auth/review/8?review=Excellent%20book" -b cookies.txt
```

Output:
```
{"message":"The review for the book with ISBN 8 has been added/updated.","reviews":{"shivam":"Excellent book"}}
```

## Task 9 — deletereview

Command:
```
curl -X DELETE http://localhost:5000/customer/auth/review/8 -b cookies.txt
```

Output:
```
{"message":"Reviews for the ISBN 8 posted by the user shivam deleted."}
```

## Task 10 — general.js URL

```
https://github.com/shivamcode2030/expressBookReview/blob/main/final_project/router/general.js
```

The file implements:
- getAllBooks()
- getBooksByISBN(isbn)
- getBooksByAuthor(author)
- getBooksByTitle(title)

All four methods use Axios with Async/Await.

## Task 11 — githubrepo

Command:
```
curl https://api.github.com/repos/shivamcode2030/expressBookReview
```

Relevant output:
```
"full_name": "shivamcode2030/expressBookReview",
"fork": true,
"parent": {
  "full_name": "ibm-developer-skills-network/expressBookReviews"
}
```
