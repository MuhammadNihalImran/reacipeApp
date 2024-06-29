import React, { createContext, useEffect, useState } from "react";

import Card from "./Card.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Loader } from "./Loader.jsx";
import { useLoading } from "./LoadingProvider";

function Mainpage() {
  const [query, setQuery] = useState("");
  const { isLoading, setIsLoading, data, setSearch } = useLoading();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query); // Set search to the current query value
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
        {isLoading ? (
          <Loader />
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Recipe:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Dish Name"
                value={query}
                onChange={handleInputChange}
              />
              <Form.Text className="text-muted">
                Which dish's recipe are you interested in knowing?
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </div>
      <hr />
      {data && <Card data={data} />}
    </>
  );
}

export default Mainpage;
