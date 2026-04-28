function copyNumber(button) {
  navigator.clipboard.writeText("+918369411532");

  button.textContent = "Copied!";

  setTimeout(() => {
    button.textContent = "Copy Number";
  }, 1500);
}