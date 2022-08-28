import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const USERS = [
  { key: uuidv4(), name: "Kerem", age: 22 },
  { key: uuidv4(), name: "Melih", age: 23 },
  { key: uuidv4(), name: "Abdullah", age: 23 },
  { key: uuidv4(), name: "Esad", age: 23 },
  { key: uuidv4(), name: "Kadir", age: 20 },
  { key: uuidv4(), name: "Abdullah", age: 17 },
  { key: uuidv4(), name: "Cihad", age: 20 },
  { key: uuidv4(), name: "Emre", age: 19 },
  { key: uuidv4(), name: "Burhan", age: 22 },
  { key: uuidv4(), name: "Mikail", age: 20 },
  { key: uuidv4(), name: "Ibrahim", age: 22 },
  { key: uuidv4(), name: "Hasanali", age: 22 },
];

export default function ArraySearch() {
  // Values for adding user form
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  // Value of search field
  const [name, setName] = useState("");
  // Search result
  const [foundUser, setFoundUser] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = USERS.filter((user) => {
        // We are using toLowerCase() for case-insensitive
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUser(results);
    } else {
      // When the search field is empty, all users are shown...
      setFoundUser(USERS);
    }

    setName(keyword);
  };

  function handleNameSubmit(e) {
    const name = newName;
    const age = newAge;

    if (name === "") return;
    else if (age === null) return;

    setFoundUser((prevNames) => {
      return [...prevNames, { key: uuidv4(), name: name, age: age }];
    });
    e.preventDefault();
  }

  return (
    <div className="array-search-landing">
      <h1>Array with search filter</h1>

      <p>Add a User:</p>
      <form onSubmit={(e) => handleNameSubmit(e)}>
        <div className="label-row">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            onChange={(e) => setNewName(e.target.value)}
            required
            className="name-input"
          />
        </div>
        <div className="label-row">
          <label>Age: </label>
          <input
            type="number"
            min={0}
            max={99}
            name="age"
            onChange={(e) => setNewAge(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Add to List" />
      </form>

      <p>Search for User:</p>
      <input
        type="search"
        value={name}
        onChange={filter}
        className="search-users"
        placeholder="Search for Name..."
      ></input>

      <ul>
        {foundUser && foundUser.length > 0 ? (
          foundUser.map((item) => (
            <li className="user-row" key={item.key}>
              <p>
                <b>Name:</b> {item.name}
              </p>
              <p>
                <b>Alter:</b> {item.age}
              </p>
            </li>
          ))
        ) : (
          <p>Sadly, no results found!</p>
        )}
      </ul>
    </div>
  );
}
