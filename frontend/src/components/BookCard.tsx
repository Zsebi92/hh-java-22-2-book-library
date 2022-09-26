import {Book} from "../model/Book";


type BookCardProps = {
    book: Book;
}

export default function BookCard(props: BookCardProps){

    return (
        <div className={"book-card"}>

            <p>{props.book.isbn} {props.book.title} {props.book.author}</p>

        </div>
    )
}