export function slideshow(event, images) {
  const x = Math.floor(
    event.clientX - event.target.getBoundingClientRect().left
  );
  const width = event.target.offsetWidth;
  const percentage = x / width;
  const imageNumber = Math.floor(percentage * images.length);

  if (imageNumber >= 0) {
    images.forEach(image => {
      image.classList.add("slideshow__image_hide");
    });
    images[imageNumber].classList.remove("slideshow__image_hide");
  }

  return;
}
