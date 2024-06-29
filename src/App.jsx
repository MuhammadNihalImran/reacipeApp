import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./component/RecipeSearch/Mainpage";
import Details from "./component/RecipeSearch/Details";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/:recipeID" element={<Details />} />
    </Routes>
  );
};

export default App;
