import {Book} from "../model/Book";
import BookCard from "./BookCard";

type BookGalleryProps = {
    books: Book[];
}

export default function BookGallery(props: BookGalleryProps) {

    return(
        <div>
            {props.books.map((book) =>
                <BookCard book={book}/>
                )}

        </div>
    )
}