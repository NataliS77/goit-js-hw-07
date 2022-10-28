import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery')
const cardMarkup = createGalleryItemsMarkup(galleryItems);
// galleryContainer.addEventListener('click', onOpenModalGallery)
galleryContainer.insertAdjacentHTML('beforeend', cardMarkup);

function createGalleryItemsMarkup (galleryItems){
return galleryItems.map(({ preview, original, description }) => {

    return `
        
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `
   
    }).join('');
}
// function onOpenModalGallery(event) {
//     event.preventDefault();
   
// }
 let lightbox = new SimpleLightbox('.gallery a', {
        captionsData:'alt',
        captionSelector:'img',
        captionDelay:250,
    });