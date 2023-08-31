const submitBtn = document.getElementById("submit-btn");
const ratedValue = document.getElementById("rated-value");
const enterRatingSection = document.getElementById("enter-rating");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const selectedValue = document.querySelector("input[name='rating']:checked");

  if (selectedValue) {
    ratedValue.textContent = selectedValue.value;
    thankYou();
  } else console.log("Please select a rating befor sumbit.");
});

function thankYou() {
  if (!enterRatingSection.classList.contains("go-up")) {
    enterRatingSection.classList.add("go-up");
  }
}
