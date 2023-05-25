import React from "react";
import { Link } from "react-router-dom";

const HeroCard = ({ id, name, powerstats }) => {
  const linkStyle = {
    color: "#875053",
  };
  return (
    <div className="hero-card">
      <h3>
        <Link to={`/${id}`} style={linkStyle}>
          {name}
        </Link>
      </h3>
      <p className="hero-details-holder">Power Stats: {powerstats}</p>
    </div>
  );
};

export default HeroCard;

// const SnackCard = ({ id, name, healthy, vegetarian, votes, vote }) => {

//   return <div className='snack-card'>
//       <h3><Link to={`/snacks/${id}`} style={linkStyle}>{name}</Link></h3>
//       <p><span className="votes-counter">Votes: {votes}</span></p>
//       <p className="snack-details-holder">
//           { vegetarian ? <span className="vegetarian icon">V</span> : ""}
//           { healthy ? <span className="healthy icon">H</span> : ""}
//           <button onClick={() => vote(id, 1)}>+</button>
//           <button onClick={() => vote(id, -1)}>-</button>
//       </p>
//       <button>Delete</button>
//       <br></br>
//   </div>
// };
