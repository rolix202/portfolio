var activeModal = null;

function showModal(event) {
  event.preventDefault();
  
  if(activeModal) {
    return;
  }
  
  var modal = document.createElement("div");
  modal.innerHTML = "<p>Page under construction!</p><button>Close</button><p><br>Thanks for visiting!</p>";
  modal.classList.add("modal");
  document.body.appendChild(modal);
  
  var closeButton = modal.querySelector("button");
  closeButton.onclick = function() {
    document.body.removeChild(modal);
    activeModal = null;
  }
  
  modal.animate([{opacity: 0}, {opacity: 1}], {duration: 500, fill: "forwards"});
  activeModal = modal;
}