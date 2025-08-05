import data from "./data.jsx";
import { useState } from "react";

function App() {
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredData = () => {
        return data.filter((book) =>
            book.title.toLowerCase().includes(search.toLowerCase())
        );
    };

    function BookInfo({ book }) {
        return (
            <section>
                <h2>{book.title}</h2>
                <p>{book.description}</p>
            </section>
        );
    }

    return (
        <>
            <label htmlFor="search">검색:</label>
            <input id="search" type="text" value={search} onChange={onChange} />

            {filteredData().map((book, index) => {
                return <BookInfo key={index} book={book} />;
            })}
        </>
    );
}

export default App;
