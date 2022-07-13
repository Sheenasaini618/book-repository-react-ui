//----------------------------Promises-----------------------------------

// //Expecting Data
// const initiatingFunction = () => {
//     console.log(fetch())
// }

// //Async which return promises
// const fetch = (data) => {
//    return new Promise((resolve, reject) => {
//        // reject()
//        resolve("Done")
//     })
// }

// initiatingFunction()

// ------------------------------------------------------------------------------------------

const retrieveAllBooks = () => {
  //GET "http://localhost:8080/api/v1/books/list"
  const url = "http://localhost:8080/api/v1/books/list";
  const booksData = fetch(url);
  console.log(booksData);
  return booksData;
};

const retrieveBooksBasisTitle = (title) => {
  //GET "http://localhost:8080/api/v1/books/search/title/" + title
  const url = "http://localhost:8080/api/v1/books/search/title/" + title;
  const booksData = fetch(url);
  console.log(booksData);
  return booksData;
};

const deleteBook = (id) => {
  //DELETE "http://localhost:8080/api/v1/books/delete/{id}"
  const url = "http://localhost:8080/api/v1/books/delete/" + id;
  const response = fetch(url, {
    method: "DELETE",
  });
  console.log(response);
  return response;
};

const addBook = (book) => {
  //POST http://localhost:8080/api/v1/books/create

  const bookBody = {
    title: book.title,
    imageLinks: {
      smallThumbnail: book.thumbnail,
      thumbnail: book.thumbnail,
    },
    authors: [book.authors],
    description: book.description,
    price: book.price,
    quantity: book.quantity,
  };

  console.log(bookBody);

  const url = "http://localhost:8080/api/v1/books/create";
  const booksData = fetch(url, {
    method: "POST",
    body: JSON.stringify(bookBody),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(booksData);
  return booksData;
};

const addGoogleBook = (book) => {
  //POST http://localhost:8080/api/v1/books/create

  const googleBookBody = {
    title: book.volumeInfo.title,
    imageLinks: {
      smallThumbnail: book.volumeInfo.imageLinks.smallThumbnail,
      thumbnail: book.volumeInfo.imageLinks.thumbnail,
    },
    authors: [book.volumeInfo.authors[0]],
    description: book.volumeInfo.description,
    price: book.volumeInfo.price,
    quantity: book.volumeInfo.quantity,
  };

  console.log(googleBookBody);

  const url = "http://localhost:8080/api/v1/books/create";
  const bookData = fetch(url, {
    method: "POST",
    body: JSON.stringify(googleBookBody),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(googleBookBody);
  return bookData;
};

//retrieveBookListOnBasisTitle

const editBook = (book) => {
  //POST http://localhost:8080/api/v1/books/create

  const bookBody = {
    id: book.id,
    title: book.title,
    imageLinks: {
      smallThumbnail: book.thumbnail,
      thumbnail: book.thumbnail,
    },
    authors: [book.authors],
    description: book.description,
    price: book.price,
    quantity: book.quantity,
  };

  console.log(bookBody);

  const url = "http://localhost:8080/api/v1/books/update/" + book.id;
  const booksData = fetch(url, {
    method: "PUT",
    body: JSON.stringify(bookBody),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(booksData);
  return booksData;
};

const fetchBooksFromGoogle = (search) => {
  //GET "http://localhost:8080/api/v1/books/google/list/{search}"
  const url = "http://localhost:8080/api/v1/books/google/list/" + search;
  const booksData = fetch(url);
  console.log(booksData);
  return booksData;
};

//

export { retrieveAllBooks, deleteBook, addBook, editBook, fetchBooksFromGoogle, addGoogleBook, retrieveBooksBasisTitle };
