/* Anime Images Printer */

const body = document.querySelector("body");

const anime = [
  "assets/img1.png",
  "assets/img2.png",
  "assets/img3.png",
  "assets/img4.png",
  "assets/img5.png",
  "assets/img6.png",
  "assets/img7.png",
  "assets/img8.png",
  "assets/img9.png",
  "assets/img10.png",
  "assets/img11.png",
  "assets/img12.png",
  "assets/img13.png",
  "assets/img14.png",
  "assets/img15.png",
  "assets/img16.png",
  "assets/img17.png",
  "assets/img18.png",
  "assets/img19.png",
  "assets/img20.png",
];

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let x = Math.random() * 90;
  let y = Math.random() * 82;
  let rotate = Math.random() * 360;
  let anime_index = Math.floor(Math.random() * anime.length);
  let img = document.createElement("img");
  img.setAttribute("src", anime[anime_index]);
  img.style.height = "250px";
  img.style.position = "absolute";
  img.style.left = x + "%";
  img.style.top = y + "%";
  img.style.rotate = rotate + "deg";
  body.appendChild(img);
});
