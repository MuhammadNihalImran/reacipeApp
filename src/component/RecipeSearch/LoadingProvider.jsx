import React, { createContext, useState, useContext, useEffect } from "react";
import { fetchData } from "../../servies.js";

const LoadingChanger = createContext();

export const useLoading = () => useContext(LoadingChanger);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState(null);
  const [search, setSearch] = useState("pizza");

  useEffect(() => {
    if (search) {
      setIsLoading(true); // Set loading to true before fetching data
      fetchData(search)
        .then((response) => {
          setData(response);
          // Set loading to false after data is fetched
          console.log("response", response);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false); // Set loading to false in case of error
        });
    }
  }, [search, setIsLoading]);

  return (
    <LoadingChanger.Provider
      value={{ isLoading, setIsLoading, data, setSearch }}
    >
      {children}
    </LoadingChanger.Provider>
  );
};

export default LoadingProvider;
