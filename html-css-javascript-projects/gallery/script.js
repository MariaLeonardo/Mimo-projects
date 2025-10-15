const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalCloseButton = document.getElementById("modal-close-button");

function showModal(thumbnail) {
  modal.style.display = "block";
  modalContent.src = thumbnail.src;
}

function hideModal() {
  modal.style.display = "none";
}

modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    hideModal();
  }
});

modalCloseButton.addEventListener("click", hideModal);