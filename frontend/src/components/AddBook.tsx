import {ChangeEvent, useState} from "react";


type AddBookProps = {
    addBook : (isbn: string, title: string, author: string) => void
}

export default function AddBook(props: AddBookProps){

    const [isbn, setIsbn] = useState("")
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const isbnOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsbn(event.target.value)
    }
    const titleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const authorOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAuthor(event.target.value)
    }



    return(
        <div className={"serch-bar"}>
            <input onChange={isbnOnChange} value={isbn}/>
            <input onChange={titleOnChange} value={title}/>
            <input onChange={authorOnChange} value={author}/>
            <button onClick={() => props.addBook(isbn, title, author)}>Add</button>
        </div>
    )
}


