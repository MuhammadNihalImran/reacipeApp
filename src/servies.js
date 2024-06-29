const queryString = {
  app_id: process.env.REACT_APP_APP_ID,
  app_key: process.env.REACT_APP_APP_KEY,
};
console.log(process.env.REACT_APP_APP_ID);

export const fetchData = async (defaultQuery) => {
  const { app_id, app_key } = queryString;
  try {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.log("somthing went wrong");
    return error;
  }
};
