let generate_btn = document.querySelector(".generate_btn");

generate_btn.addEventListener("click", fetchpics);

function fetchpics()
{
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) => {
        let catUrl = data[0].url;
        let catImgEl = document.createElement("img");
        catImgEl.setAttribute('src', `${catUrl}`)
        let CatClass = document.querySelector(".CatClass")
        CatClass.appendChild(catImgEl)
    })
    .catch(err => console.log(err))
}