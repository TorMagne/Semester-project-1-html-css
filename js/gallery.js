const modal = document.querySelector(".modal");
const galleryImages = document.querySelectorAll(".gallery-img");
const modalImage = document.querySelector(".modal-img");
const imageText = document.querySelector(".modal-text");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("open");
    const imgSrc = img.getAttribute("data-original");
    modalImage.src = `./img-gallery/${imgSrc}`;
    const altText = img.alt;
    imageText.textContent = altText;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
  }
});
