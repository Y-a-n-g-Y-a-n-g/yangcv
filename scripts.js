const avatar = document.querySelector('[data-avatar]');
if (avatar) {
  const img = avatar.querySelector('img');
  if (img) {
    img.addEventListener('error', () => {
      img.classList.add('is-hidden');
      avatar.classList.add('no-image');
    });
  }
}

const galleryWrapper = document.querySelector('.gallery-wrapper');
const updateGalleryView = () => {
  const showGallery = window.location.hash === '#gallery';
  if (galleryWrapper) {
    galleryWrapper.hidden = !showGallery;
  }
  document.body.classList.toggle('gallery-only', showGallery);
};

window.addEventListener('hashchange', updateGalleryView);
updateGalleryView();
