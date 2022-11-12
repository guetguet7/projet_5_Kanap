const idurlParams = document.location.search;
const idParams = new URLSearchParams(idurlParams);
const leId = idParams.get("id");
console.log(leId);

        /* ALLER CHERCHER L'URL ET L'ID POUR POUVOIR L'AFFICHER  */ 

let produitData = [];

const fetchProduit = async () => {
    await fetch(`http://localhost:3000/api/products/${leId}`)
    .then((res) => (res.json()))
    .then((promise) => {
    produitData = promise 
    console.log(produitData);
    })
  }

  function productData(promise) {
    let productImg = document.createElement("img");
    document.querySelector(".item__img").appendChild(productImg);
    productImg.setAttribute("src", `${product.imageUrl}`);
    productImg.setAttribute("alt", `${product.altTxt}`);


  } 
  productData()
// const produitDisplay = async () => {
//     await fetchProduit()

//   // let productImg = document.createAttribute('item_img').innerHTML = `
//   // <img src="${produitData.imageUrl}" alt="${produitData.altTxt}"
  
  
//   // `

//   //   }
//   //   produitDisplay()
//   // };