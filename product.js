const ProductDescrButton = document.querySelector(".product__descr-button");
console.log(ProductDescrButton);
const applicationsInner = document.querySelector(".applications__inner");
const applicationClose = document.querySelector(".applications__close");
ProductDescrButton.addEventListener("click", () => {
  applicationsInner.classList.toggle("applications__active");
});
applicationClose.addEventListener("click", () => {
  applicationsInner.classList.toggle("applications__active");
});