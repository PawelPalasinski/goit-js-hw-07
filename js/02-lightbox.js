import { galleryItems } from './gallery-items.js';
// Change code below this line

// ADD ALL IMAGES

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML(
  "beforeend",
  galleryItems
    .map(
      (galleryItem) =>
        `<li class="item"><img src="${galleryItem.preview}" alt= "${galleryItem.alt}" width="340"></li>`
    )
    .join("")
);

// add class for css

gallery.classList.add("gallery__item");

// loop to add all from gallery-items.js

for (let i = 0; i < galleryItems.length; i++) {
  let item = document.querySelectorAll("li");
  item[i].style.margin = "10px";
};