const idurlParams = document.location.search;
const idParams = new URLSearchParams(idurlParams);
const leId = idParams.get("id");
console.log(leId);

/* ALLER CHERCHER L'URL ET L'ID POUR POUVOIR L'AFFICHER  */

fetch("http://localhost:3000/api/products/" + leId)
  .then((response) => response.json())
  .then((data) => {
    datas(data);
  })
  .catch(function (err) {
    // console.log("erreur")
  });

function datas(data) {
  console.log(data);
  const img = document.querySelector(".item__img");
  img.innerHTML += `<img src="${data.imageUrl}" alt="${data.altTxt}">`;

  const titre = document.getElementById("title");
  titre.innerHTML += `${data.name}`;

  const prix = document.getElementById("price");
  prix.innerHTML += `${data.price}`;

  const info = document.getElementById("description")
  info.innerHTML += `${data.description}`

  const couleur = document.getElementById("colors")
  for (let i = 0; i < data.length; i++)
  couleur.innerHTML += `${data.value}`
}
