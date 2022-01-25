import React from "react";
import CitiesList from "./CitiesList";

const CountrySelection = () => {
  const [country, setCountry] = React.useState("usa");

  return (
    <>
      <h2>Most Populous Cities by Country</h2>
      <div>
        <button onClick={() => setCountry("usa")}>USA</button>
        <button onClick={() => setCountry("mexico")}>Mexico</button>
        <button onClick={() => setCountry("canada")}>Canada</button>
        <button onClick={() => setCountry("atlantis")}>Atlantis</button>
      </div>
      <CitiesList country={country} />
    </>
  );
};

export default CountrySelection;
