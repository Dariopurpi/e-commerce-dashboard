const BASE_URL = "https://dummyjson.com";

const ENDPOINT = { category: "categories" };

export const GET = async (resource) => {
  const res = await fetch(`${BASE_URL}/${resource}`);
  const data = await res.json();

  return data.products;
};

export const POST = (titleCategory, id) => {
  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: titleCategory,
      id: id,
      /* other product data */
    }),
  })
    .then((res) => res.json())
    .then(console.log);
};

export const DELETE = (id) => {
  fetch(`https://dummyjson.com/products/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(console.log);
};
