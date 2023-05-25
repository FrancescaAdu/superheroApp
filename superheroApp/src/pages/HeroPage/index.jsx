import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const HeroPage = () => {
  const { heroID } = useParams();

  const { hero, setHero } = useState({});

  useEffect(() => {
    setLoading(true);
    async function loadHero() {
      const response = fetch(
        `https://www.superheroapi.com/api.php/7192351204124640/${heroID}`
      );
      const data = await (await response).json();
      setHero(data);
      setLoading(false);
    }
    loadHero();
  }, []);
  console.log(hero);

  return (
    <main>
      <div>HeroPage</div>;
    </main>
  );
};

export default HeroPage;

// const { snackId } = useParams();

//   const [loading, setLoading] = useState(false);
//   const [snack, setSnack] = useState({});

//   useEffect(() => {
//     setLoading(true);
//     async function loadSnack() {
//       const response = fetch(`http://localhost:3000/snacks/${snackId}`);
//       const data = await (await response).json();
//       setSnack(data);
//       setLoading(false);
//     }

//     loadSnack();
//   }, []);

//   function displaySnack() {
//     return (
//       <main>
//         <h1 className="close-title">{snack.name}</h1>
//         <p>
//           <em>{snack.description}</em>
//         </p>
//         <span className="votes-counter">Votes: {snack.votes}</span>
//         <p className="snack-details-holder">
//           {snack.vegetarian ? <span className="vegetarian icon">V</span> : ""}
//           {snack.healthy ? <span className="healthy icon">H</span> : ""}
//         </p>
//         <Link to="/snacks">Back</Link>
//       </main>
//     );
//   }

//   return loading ? (
//     <h2>
//       <em>loading...</em>
//     </h2>
//   ) : (
//     displaySnack()
//   );
