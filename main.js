// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heart = document.querySelector('.like-glyph');
const errorModal = document.querySelector('#modal');
const errorModalMessage = document.querySelector('#modal-message');

// Hide the error modal when the page loads
errorModal.classList.add('hidden');

heart.addEventListener('click', () => {
  // Change heart to full or empty immediately
  if (heart.innerHTML === EMPTY_HEART) {
    heart.innerHTML = FULL_HEART;
    heart.classList.add('activated-heart');
  } else {
    heart.innerHTML = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  }


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);   
  });
}
});