import { galleryItems } from './gallery-items.js';
// Change code below this line

// ADD ALL IMAGES

const gallery = document.querySelector(".gallery");

// adding all images from gallery-items.js to element with class .gallery in HTML

gallery.insertAdjacentHTML(
  "beforeend",
  galleryItems
    .map(
      (galleryItem) =>
        `<li class="gallery__item">
        <a clss="gallery__link" href="${galleryItem.original}">
        <img class="gallery__image"
        src="${galleryItem.preview}" 
        data-source="${galleryItem.original}"
        alt= "${galleryItem.description}"></a></li>`
    )
    .join("")
);