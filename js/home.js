document.querySelectorAll(".avis-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const note = btn.dataset.note;
    const message = btn.dataset.message;
    const img = btn.dataset.img;

    document.getElementById("modalName").textContent = name;
    document.getElementById("modalNote").textContent = note;
    document.getElementById("modalMessage").textContent = message;
    document.getElementById("modalImg").src = img;
  });
});
