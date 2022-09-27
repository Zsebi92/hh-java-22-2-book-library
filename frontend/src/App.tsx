import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import BookGallery from "./components/BookGallery";
import AddBook from "./components/AddBook";

function App() {

    const [books, setAllBooks] = useState([]);

    useEffect(() => {
        getAllBooks();
    }, [])

    const getAllBooks = () => {
        axios.get("/api/book")
            .then((response) => response.data)
            .then((books) => setAllBooks(books))
    }

    const addBook = (isbn: string, title: string, author: string) => {
        let newBook = {
            isbn : isbn,
            title: title,
            author: author
        }

        axios.post("/api/book", newBook)
            .then(getAllBooks)
    }


  return (
    <div className="App">

      <h1>Book Service</h1>

        <BookGallery books={books}/>
        <AddBook addBook={addBook}/>

    </div>
  );
}

export default App;
