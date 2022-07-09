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

const fetchBooksFromGoogle = (search) => {
  //GET "http://localhost:8080/api/v1/books/list/{search}"
  const url = "http://localhost:8080/api/v1/books/list/" + search;
  const booksData = fetch(url);
  console.log(booksData);
  return booksData;
};

//

export { retrieveAllBooks, deleteBook, addBook, editBook, fetchBooksFromGoogle };
