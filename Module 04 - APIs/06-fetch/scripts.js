const sectionEl = document.querySelector("section");

const apiKey = "hA7DlBNEhi05aWn1EAgQugsBEVCg6Obt";
const queryUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10&rating=g`;

fetch(queryUrl)
  .then((response) => response.json())
  .then((data) => appendGifs(data))
  .catch((error) => console.error("Error fetching GIFs:", error));

function appendGifs(gifs) {
  console.log(gifs);
  for (let i = 0; i < gifs.data.length; i++) {
    let imageEl = document.createElement("img");
    imageEl.src = gifs.data[i].images.fixed_height.url;
    sectionEl.appendChild(imageEl);
  }
}
