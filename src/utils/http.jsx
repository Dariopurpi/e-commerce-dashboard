const BASE_URL = "https://dummyjson.com/products";

const ENDPOINT = { category: "categories" };

const GET = async (resource) => {
  const res = await fetch(`${BASE_URL}/${resource}`);
  const data = await res.json();

  return console.log(data);
};

export default GET;
