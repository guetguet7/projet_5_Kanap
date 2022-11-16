fetch('http://localhost:3000/api/products')
.then(response => response.json()) 
.then(data => {
    datas(data); 
})
.catch(function(err) {
    //console.log("erreur")
});
 
function datas(data) {
    const items = document.getElementById("items");
    for (let i = 0; i < data.length; i++)
    
    items.innerHTML += (`
    <a href="./product.html?id=${data[i]._id}">
        <article>
            <img src=${data[i].imageUrl} alt="$data[i]."/>         
                <h3> ${data[i].name}</h3>
            <p>${data[i].description}</p>
        </article>
    </a>`
    )};   