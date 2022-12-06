const ratings = document.getElementsByClassName(
  "card__body__rating__item__input"
);
const labels = document.getElementsByClassName(
  "card__body__rating__item__label"
);
const submitButton = document.getElementById("submit");
const initialCard = document.getElementById("rating__form");
const finalCard = document.getElementById("rating__submitted");
const rating = document.getElementById("rating");
// get html data-value attribute
let selected = "";
const handleRatingClick = (e) => {
  selected = e.target.value;
  console.log(e.target.value);
  //   add class selected to clicked element
  labels[selected - 1].classList.add("selected");
  //   change inner text of rating element
  rating.innerText = selected;
  //   remove class selected from other elements
  for (let i = 0; i < ratings.length; i++) {
    if (labels[i].getAttribute("data-value") !== selected) {
      labels[i].classList.remove("selected");
    }
  }
  //   change submit button from disabled
  submitButton.disabled = false;
};
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(selected);
  //   add class not-visible to initial card
  initialCard.classList.add("not-visible");
  //   remove class not-visible from final card
  finalCard.classList.remove("not-visible");
};
for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", handleRatingClick);
}

submitButton.addEventListener("click", handleSubmit);
