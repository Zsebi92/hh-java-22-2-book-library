import {Book} from "../model/Book";
import "./BookCard.css"


type BookCardProps = {
    book: Book;
}

export default function BookCard(props: BookCardProps){

    return (
        <div className={"book-card"}>
            <h3>{props.book.title}</h3>
            <h4>{props.book.author}</h4>
            <p>{props.book.isbn}  </p>

        </div>
    )
}