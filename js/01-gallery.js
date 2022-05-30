import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
let instance = "";

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

  onOpenModal(url, alt);
}

function onOpenModal(url, alt) {
  //  Створення розмітки модалки
  instance = basicLightbox.create(`
	<img
          src="${url}"
          alt="${alt}"

        />
`);
  instance.show();

  //Додає подію натискання клавіш
  window.addEventListener("keydown", onEscKeyPress);
}
//   Закриття модалки при натисканні ESC
function onEscKeyPress(ev) {
  if (ev.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", onEscKeyPress);
    console.log("Escape");
  }
}
