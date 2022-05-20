import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML(
  "beforeend",
  galleryItems
    .map(
      (galleryItem) =>
        `<div class="gallery__image"><a href="${galleryItem.original}"><img src="${galleryItem.preview}" alt= "${galleryItem.description}" width="340"></a></div>`
    )
    .join("")
);

