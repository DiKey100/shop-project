let productCountEl = document.getElementById("products-count");
let addToCardBtns = document.querySelectorAll(".add-to-cart");

// for (let i = 0; i < addToCardBtns.length; i++) {
//   addToCardBtns[i].addEventListener("click", function () {
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
  if (window.scrollY >= document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}
window.addEventListener("scroll", showModalByScroll);

// heart like
let heartBtn = document.querySelectorAll(".heart");
heartBtn.forEach((item) =>
  item.addEventListener("click", function () {
    if (item.classList.contains("heart")) {
      item.classList.remove("heart");
      item.classList.add("heart-like");
    } else {
      item.classList.remove("heart-like");
      item.classList.add("heart");
    }
    // item.classList.toggle("heart-like");
  })
);

// slider
$(".slider-block").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
});

let incrementBtns = document.querySelectorAll(".increment-btn");
let decrementBtns = document.querySelectorAll(".decrement-btn");
let inputFields = document.querySelectorAll(".product-quantity input");

class Counter {
  constructor(incrementBtn, decrementBtn, inputField) {
    this.domRefs = {
      incrementBtn,
      decrementBtn,
      inputField,
    };
    this.toogleButtonState = function () {
      let count = this.domRefs.inputField.value;
      this.domRefs.decrementBtn.disabled = count <= 1;
      this.domRefs.incrementBtn.disabled = count >= 10;
    };
    this.toogleButtonState();

    this.increment = function () {
      this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
      this.toogleButtonState();
    };
    this.decrement = function () {
      this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
      this.toogleButtonState();
    };

    this.domRefs.incrementBtn.addEventListener(
      "click",
      this.increment.bind(this)
    );
    this.domRefs.decrementBtn.addEventListener(
      "click",
      this.decrement.bind(this)
    );
  }
}

const counter1 = new Counter(
  incrementBtns[0],
  decrementBtns[0],
  inputFields[0]
);
