import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

//Створення розмітки галереї
function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image lazyload"  loading = "lazy" data-src="${preview}" alt="${description}" />
    </a>`;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
});

//lazyload
if ("loading" in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.0.0/lazysizes.min.js";
  script.integrity =
    "sha512-w/GOi3cTcVd79SBfQyRFwRRM99yHJvshCJdplpNVkE8nlmkWb3VK1kO/+FFQc8YGOAg/7xsWmjL8LVUJMN4lRQ==";
  script.crossOrigin = "anonymous";
  script.referrerPolicy = "no-referrer";

  document.body.appendChild(script);
}
