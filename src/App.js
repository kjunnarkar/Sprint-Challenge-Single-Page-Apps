import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/WelcomePage";
import Characters from "./components/CharacterList";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/characters" component={Characters} />
    </main>
  );
}
