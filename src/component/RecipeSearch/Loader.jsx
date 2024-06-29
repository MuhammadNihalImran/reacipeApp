import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./Loader.css";

export const Loader = () => (
  <div className="loader-overlay">
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);
