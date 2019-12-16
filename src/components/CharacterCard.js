import React from "react";
import styled from "styled-components";

/* styled-components */
const Card = styled.div `
  margin: 50px 100px 50px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

const Name = styled.h2 `
  color: yellow;
  font-weight: bold;
`;

const ListHeader = styled.ul `
  list-style-type: none;
`;

const ListItems = styled.li `
  color: white;
`;

const Link = styled.a `
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  :hover {
    color: red;
  }
`;

export default function CharacterCard({character}) {
  return (
    <Card>
      <img src={character.image} alt="Rick and Morty" />
      <ListHeader>
        <Name>Name: {character.name}</Name>
        <ListItems>Species: {character.species}</ListItems>
        <ListItems>Gender: {character.gender}</ListItems>
        <ListItems>Status: {character.status}</ListItems>
        <ListItems>Created: {character.created}</ListItems>
        <Link href={`${character.url}`}>URL: {character.url}</Link>
      </ListHeader>
    </Card>
  );
};
