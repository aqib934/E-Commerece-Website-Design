// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img')

// if (popup) {
//   closePopup.addEventListener("click", () => {
//     popup.classList.add("hide-popup");
//   });

//   window.addEventListener("load", () => {
//     setTimeout(() => {
//       popup.classList.remove("hide-popup");
//     }, 1000);
//   });
// }

function closePopupHandler() {
  popup.classList.add("hide-popup");
  closePopup.removeEventListener("click", closePopupHandler);
}

function showPopupHandler() {
  setTimeout(() => {
    popup.classList.remove("hide-popup");
    closePopup.addEventListener("click", closePopupHandler);

    // Store a flag indicating that the event has been triggered
    sessionStorage.setItem("popupShown", "true");
  }, 1000);
}

window.addEventListener("load", () => {
  // Check if the event has already been triggered
  const popupShown = sessionStorage.getItem("popupShown");
  if (!popupShown) {
    showPopupHandler();
  }
});





smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}

smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}

smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}

smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}




