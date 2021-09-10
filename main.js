// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
// Hide Modal window
function hideModal() {
  const modal = document.querySelector("#modal");
  modal.classList.add("hidden");
  // console.log("modal is hidden");
}
hideModal();
// Select heart glyphs
const likeBtns = document.querySelectorAll(".like-glyph");
console.log(likeBtns);

for (const btn of likeBtns) {
  console.log(btn.innerHTML);
  btn.addEventListener("click", function () {
    likeAction(btn);
  });
}

function likeAction(btn) {
  console.log("heart clicked!");
  mimicServerCall()
    .then(function (resp) {
      if (btn.innerHTML !== FULL_HEART) {
        btn.innerHTML = FULL_HEART;
      } else {
        btn.innerHTML = EMPTY_HEART;
      }
    })
    .catch(function (error) {
      renderError(error);
    });
}

function renderError(message) {
  // console.log("should be an error message rendered...");
  const h2 = modal.querySelector("h2");
  h2.innerHTML = message;
  modal.classList.remove("hidden");
  setTimeout(hideModal, 3000);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
