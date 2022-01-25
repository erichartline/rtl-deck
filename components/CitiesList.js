import React from "react";
import useSWR from "swr";

const CitiesList = ({ country }) => {
  const { data, error } = useSWR(`/api/cities/${country}`);

  if (error) {
    return <div>got an error</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CitiesList;
