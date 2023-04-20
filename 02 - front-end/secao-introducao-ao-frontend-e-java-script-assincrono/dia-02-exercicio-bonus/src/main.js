const div = document.getElementById("dog");
const buttonDog = document.getElementById("buttonDog");
const buttonCat = document.getElementById("buttonCat");
const img = document.createElement("img");

const dogPromise = () => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((url) => url);
};

const catPromise = () => {
  return fetch("https://api.thecatapi.com/v1/images/search").then((response) =>
    response.json()
  );
};

buttonDog.addEventListener("click", () => {
  dogPromise().then((url) => {
    img.src = url.message;
    div.appendChild(img);
  });
});

buttonCat.addEventListener("click", () => {
  catPromise().then((url) =>
    url.map((ls) => {
      img.src = ls.url;
      div.appendChild(img);
    })
  );
});
