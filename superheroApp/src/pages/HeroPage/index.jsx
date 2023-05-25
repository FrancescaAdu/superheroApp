import React, { useState } from "react";

const HeroPage = ({ addToTeam }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [superheroData, setSuperheroData] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setError("Please enter a superhero name or ID");
      setSuperheroData([]);
      return;
    }

    fetch(
      `https://www.superheroapi.com/api.php/7192351204124640/search/${searchQuery}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.response === "success") {
          setSuperheroData(data.results);
          setError("");
        } else {
          setSuperheroData([]);
          setError("Superhero not found");
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Error occurred while fetching data");
        setSuperheroData([]);
      });
  };

  const handleAddToTeam = (superhero) => {
    addToTeam(superhero);
    setSuperheroData([]);
    setSearchQuery("");
  };

  return (
    <div className="HeroPage">
      <h1>Superhero Search</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Enter superhero name or ID"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="cards-container">
        {superheroData.map((superhero) => (
          <div className="card" key={superhero.id}>
            <h2>{superhero.name}</h2>
            <img src={superhero.image.url} alt={superhero.name} />
            <p>Full Name: {superhero.biography["full-name"]}</p>
            <p>Aliases: {superhero.biography.aliases.join(", ")}</p>
            <p>Publisher: {superhero.biography.publisher}</p>
            <p>Powerstats:</p>
            <ul>
              {Object.entries(superhero.powerstats).map(([stat, value]) => (
                <li key={stat}>
                  {stat}: {value}
                </li>
              ))}
            </ul>
            <button onClick={() => handleAddToTeam(superhero)}>
              Add to Team
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroPage;
