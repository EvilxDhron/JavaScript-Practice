/* Instagram Like Feature */

let body = document.querySelector("body");

let card = document.querySelector(".card");
let postimg = document.querySelector(".instapost");

let likeimg = `<img class="w-[80px] h-[80px] rounded-[50%] border-1 border-white" src="./assets/insta_like_img.png" alt=""/>`;

/* if (postimg) {
  postimg.addEventListener("dblclick", () => {
    let like = document.createElement("img");
    like.src = "./assets/insta_like_img.png";
    like.className = "instalike w-[80px] h-[80px]";
    like.alt = "";
    like.style.transform = "translate(-50%, -50%) scale(0.6)";
    like.style.transition = "transform 0.3s ease";
    card.appendChild(like);
    like.style.position = "absolute";
    like.style.top = "50%";
    like.style.left = "50%";
    like.style.transform = "translate(-50%, -50%) scale(1)";
    like.style.scale = 1;

    setTimeout(() => {
      like.remove();
    }, 850);
  });
} */

if (postimg) {
  postimg.addEventListener("dblclick", () => {
    let like = document.createElement("img");
    like.src = "./assets/insta_like_img.png";
    like.className = "instalike w-[80px] h-[80px]";
    like.alt = "";

    // Set initial style
    like.style.position = "absolute";
    like.style.top = "50%";
    like.style.left = "50%";
    like.style.transform = "translate(-50%, -50%) scale(0.01)";
    like.style.transition = "transform 0.3s ease";

    // Add to DOM
    card.appendChild(like);

    // Force reflow to register initial scale
    like.offsetWidth;

    // Animate: pop in
    like.style.transform = "translate(-50%, -50%) scale(1)";

    // After 500ms, pop out
    setTimeout(() => {
      like.style.transform = "translate(-50%, -50%) scale(0.01)";
    }, 500);

    // Remove after total time (pop in + pause + pop out)
    setTimeout(() => {
      like.remove();
    }, 800); // 500ms pop in + 300ms pop out
  });
}

console.log("hellooooo!");
