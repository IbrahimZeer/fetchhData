// dummyjson.com/products
getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  const products = data.products;

  let prod = products
    .map(
      (prod) => `
    <h1>${prod.title}</h1>
    <img src="${prod.thumbnail}"/>
  `
    )
    .join("");

  document.querySelector(".products").innerHTML = prod;
};

getProducts();
