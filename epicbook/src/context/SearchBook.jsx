import { useState } from "react"
import { Button, Col, FormControl, Row } from "react-bootstrap"
import { AllBook } from "../components/MainSection/MainSection"



const SearchBook = ({books, setBooks, allBooks}) => {
    const [inputValue, setInputValue] = useState("")

    const onChangeSearchInput = (e) => {
        setInputValue(e.target.value)
    }


const filteredBooks = () => {
    if (inputValue === "") {
        setBooks(allBooks)
    } else {
        const filtered = allBooks.filter((book) => {
            return book.title.toLowerCase().includes(inputValue.toLocaleLowerCase())
        })
        setBooks(filtered)
    }
}




console.log ("component Search", allBooks)
return (
    <Row className="py-4">
        <Col className="d-flex align-items-center gap-2">
        <FormControl type="text" placeholder="Search Book" onChange={onChangeSearchInput}/>
        <Button className="btn btn-primary" onClick={filteredBooks}>
            {AllBook}
            Search{""}
        </Button>
        
        </Col>
    </Row>
)

}

export default SearchBook
