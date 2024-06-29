import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useLoading } from "./LoadingProvider";

import Button from "react-bootstrap/Button";

function Details() {
  const location = useLocation();
  const { id } = location.state || {};

  const { data } = useLoading();

  console.log("useParams id:", id); // Debugging line
  if (!id) {
    return <p>No ID found in location state</p>;
  }

  const recipe = data?.hits?.find(
    (item) => item.recipe.uri.split("#recipe_")[1] === id
  );

  return (
    <div className="d-flex align-items-center justify-content-center">
      {recipe ? (
        <div className="container m-5  w-[100%] d-flex gap-5 shadow-sm p-3 mb-5 bg-white rounded">
          <img
            className="clearfix"
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
          />
          <div>
            <h1>{recipe.recipe.label}</h1>
            {recipe.recipe.ingredientLines.map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
            <NavLink to={`/`}>
              <Button variant="primary">Back</Button>
            </NavLink>
          </div>
        </div>
      ) : (
        <p>No recipe details available</p>
      )}
    </div>
  );
}

export default Details;
