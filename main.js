async function getProducts (){
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;

  console.log(products);
  const result=products.map(function(ele){
    return `<div class="poductCard">
      <img src=${ele.thumbnail} />
      <div class="detailes">
        <div class="prt1">
          <h2>${ele.title}</h2>
          <span>${ele.price}$</span>
        </div>
        <p>${ele.description}</p>
        <div class="prt2">
          <span>${ele.rating}</span>
          <span>${ele.stock}</span>
          <span>${ele.brand}</span>
        </div>
       </div>
    </div>`;
    
  }).join('');
  document.querySelector("section .products .container").innerHTML=result;
}

getProducts();