import React, { useState } from "react";

const MyTeam = () => {
  const [team, setTeam] = useState([]);

  const addToTeam = (superhero) => {
    setTeam((prevTeam) => [...prevTeam, superhero]);
  };

  const removeFromTeam = (superheroId) => {
    setTeam((prevTeam) =>
      prevTeam.filter((superhero) => superhero.id !== superheroId)
    );
  };

  return (
    <main>
      <h1>My Team</h1>
      {team.length === 0 ? (
        <p>No superheroes in the team yet.</p>
      ) : (
        <ul>
          {team.map((superhero) => (
            <li key={superhero.id}>
              {superhero.name}
              <button onClick={() => removeFromTeam(superhero.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default MyTeam;
