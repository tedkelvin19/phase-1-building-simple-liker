// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//removing the error message
let errorMessage = document.getElementById('modal')
errorMessage.classList.add('hidden')    

// create a function for clicking the heat
function renderLike(event){
  let likeHeart = event.target
  mimicServerCall().then(()=>{
    if(likeHeart.innerHTML = EMPTY_HEART){
      likeHeart.innerHTML = FULL_HEART
      likeHeart.classList.add('activated-heart')
    } else{
      likeHeart.innerHTML = EMPTY_HEART;
      likeHeart.className = ""  
    }
  })
  .catch(()=>{
    errorMessage.classList.remove('hidden')
    setTimeout( () => {
      errorMessage.classList.add('hidden')
    },3000)
  })
}
// create a loop statement to make the span behave like a button
let likeButton = document.querySelectorAll('.like-glyph')
for (i=0; i<likeButton.length; i++)
 likeButton[i].onclick= renderLike



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
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
