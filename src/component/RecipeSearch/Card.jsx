import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLoading } from "./LoadingProvider";
import { NavLink } from "react-router-dom";

function RecipeCard({ data }) {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data, setIsLoading]);

  return (
    <div className="d-flex flex-wrap">
      {data &&
        data.hits.map((item, index) => {
          const recipeId = item.recipe.uri.split("#recipe_")[1];
          return (
            <Card key={index} style={{ width: "18rem", margin: "10px" }}>
              <Card.Img variant="top" src={item.recipe.image} />
              <Card.Body>
                <Card.Title>{item.recipe.label}</Card.Title>
                <NavLink to={`/${recipeId} `} state={{ id: recipeId }}>
                  <Button variant="primary">Recipe</Button>
                </NavLink>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}

export default RecipeCard;
