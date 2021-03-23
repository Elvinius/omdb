import { useState } from 'react';

const Search = ({ getQuery }) => {
    const [userInput, setUserInput] = useState("");
    const onChange = (q) => {
        setUserInput(q);
        getQuery(q);
    }
    return (
        <section className='search'>
            <form >
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search movies"
                    autoFocus
                    value={userInput}
                    onChange={(e) => onChange(e.target.value)} />
            </form>
        </section>
    )
}

export default Search;