import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharlist] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data.results);
        setCharlist(response.data.results);
      })
      .catch(error => {
        console.log("Did not get API", error);
      })
  }, []);

  return (
    <section className="character-list">
      <Link className="nav-links" to="/">Home</Link>
      <h2>Rick and Morty Character List</h2>
      <SearchForm
        searchList={charList}
      />
      {charList.map(person => {
        return <CharacterCard key={person.id} character={person} />
      })}
    </section>
  );
}
