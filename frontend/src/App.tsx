import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import BookCard from "./components/BookCard";
import BookGallery from "./components/BookGallery";

function App() {

    const [books, setAllBooks] = useState([]);

    useEffect(() => {

    }, [])

    const getAllBooks = () => {
        axios.get("/api/book")
            .then((response) => response.data)
            .then((books) => setAllBooks(books))
    }


  return (
    <div className="App">

      <h1>Book Service</h1>
        <BookGallery books={books}/>

    </div>
  );
}

export default App;
