const button = document.getElementById("button");
const paragraph = document.querySelector("p");
const img = document.createElement("img");
const contain = document.getElementById("containImg");

const aleatory = (number) => {
  const randomOn = Math.random() * (number - 0) + 0;
  return Math.round(randomOn);
};
const generateName = (aleatory) => {
  return fetch(
    `https://www.superheroapi.com/api.php/6065689956840918/${aleatory}/image`
  ).then((response) => response.json());
};
const generateImg = (aleatory) => {
  return fetch(
    `https://www.superheroapi.com/api.php/6065689956840918/${aleatory}/image`
  ).then((response) => response.json());
};
button.addEventListener("click", () => {
  const number = aleatory(731);
  generateName(number).then((data) => {
    paragraph.innerHTML = data.name;
  });
  generateImg(number).then((data) => {
    img.src = data.url;
    contain.appendChild(img);
  });
});
