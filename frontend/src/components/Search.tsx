import React, {useState} from "react"
import "../styling/Search.css"

/**
 * Search component, should only take in a string input
 */


const SearchBar = () => {

    const [searchInput, setSearchInput] = useState<string>("");

    const handleChange = (event: any) => {
        setSearchInput(event?.target.value);
    }

    /**Maybe create and call a dispatcher function that tries to find the right API call for the search */
    const handleClick = () => {
        console.log(searchInput);
    }

    return (
        <div>
            <input className="search"
            type="text"
            value={searchInput}
            onChange={handleChange}
            placeholder="Search for ..."

            ></input>
            <button className="search-button"
            onClick={handleClick}
            >Go</button>


        </div>
    )
}


export default SearchBar;