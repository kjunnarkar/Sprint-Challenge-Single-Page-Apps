import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm({searchList}) {
  
  const [searchName, setSearchName] = useState("");
  const [searchResults, setSearchresults] = useState(searchList);

  useEffect(() => {}, [searchName]);

  const handleChange = event => {
    setSearchName(event.target.value);

  const results = searchList.filter(person => {
    return person.name.toLowerCase().includes(searchName.toLowerCase());
  });

  setSearchresults(results);
};

  return (
    <section className="search-form">
      <form>
        <label htmlFor="name">Search Name:    </label>
        <input 
          id="name"
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={searchName}
        />
      </form>
      {searchResults.map(charName => {
        return <CharacterCard key={charName.name} character={charName} />
      })}
    </section>
  );
}
