let productCountEl = document.getElementById("products-count");
let addToCardBtns = document.querySelectorAll(".add-to-cart");

// for (let i = 0; i < addToCardBtns.length; i++) {
//   addToCardBtns[i].addEventListener("click", function () {
//     console.log("clicked");
//   });
// }

addToCardBtns.forEach((item) =>
  item.addEventListener("click", function () {
    productCountEl.textContent = +productCountEl.textContent + 1;
  })
);

let moreDetailBtns = document.querySelectorAll(".more-details");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");

moreDetailBtns.forEach((item) => item.addEventListener("click", openModal));
closeBtn.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});
function showModalByScroll() {
  if (window.scrollY > document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}
window.addEventListener("scroll", showModalByScroll);
// heart like
let heartBtn = document.querySelectorAll(".heart");
heartBtn.forEach((item) =>
  item.addEventListener("click", function () {
    item.classList.remove("heart");
    item.classList.add("heart-like");
  })
);

// slider
$(".slider-block").slick({
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
});
