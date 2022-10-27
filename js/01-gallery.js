import { galleryItems } from './gallery-items.js';
// Change code below this line
// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
const galleryContainer = document.querySelector('.gallery');
const cardMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardMarkup);

galleryContainer.addEventListener('click', onOpenModalGallery)


function createGalleryItemsMarkup (galleryItems){
return galleryItems.map(({ preview, original, description }) => {

        return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
   
    }).join('');
}
function onOpenModalGallery(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    };
  
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

    instance.show()
    
    galleryContainer.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            instance.close()

        }
    })
     console.log(event.target.dataset.source) 
}

 

    
    
    
    
    


// const createGalleryItemsMarkup = ({ original, description }) => {
    
//     return `
//     <div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>
//     `
   
// };

//  const makeGalleryItemsRow = galleryItems.map(createGalleryItemsMarkup).join('');
    
// console.log(makeGalleryItemsRow);




