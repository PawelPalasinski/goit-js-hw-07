import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML(
  "beforeend",
  galleryItems
    .map(
      (galleryItem) =>
        `<div class="gallery__image"><img src="${galleryItem.preview}" alt= "${galleryItem.alt}" width="340"></div>`
    )
    .join("")
);

for (let i = 0; i < galleryItems.length+1; i++) {
  let item = document.querySelectorAll("div");
  item[i].style.margin = "10px";
};

