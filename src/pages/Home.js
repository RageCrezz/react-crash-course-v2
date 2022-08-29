import React from "react";

export default function Home() {
  return (
    <div className="home-landing">
      <h1>Kerem's Sandbox</h1>
      <p>Welcome to my sandbox! Choose a project you want to work on:</p>

      <ul>
        <li>
          <a href="/counter">Counter</a>
        </li>
        <li>
          <a href="/todo">Todo List</a>
        </li>
        <li>
          <a href="/search-list">Array Search</a>
        </li>
        <li>
          <a href="/pokedex">PokéDex</a>
        </li>
      </ul>
    </div>
  );
}
