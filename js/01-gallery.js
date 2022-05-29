import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

//Додавання розмітки до HTML
gallery.insertAdjacentHTML("beforeend", galleryMarkup);
//Додавання слухача на галерею. Делегування на div.gallery
gallery.addEventListener("click", onGalleryItemClick);

//Створення розмітки галереї
function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

function onGalleryItemClick(ev) {
  //Прибирає перезавантаження сторінки після кліку
  ev.preventDefault();

  if (ev.target.nodeName !== "IMG") {
    return;
  }
  //Отримує URL великої картинки
  const url = ev.target.dataset.source;
  const alt = ev.target.alt;
}
