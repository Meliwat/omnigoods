// Omnigoods catalogue — minimal interactivity
(() => {
  const toast = document.getElementById("toast");
  let timer;
  const show = (msg) => {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove("show"), 2600);
  };
  document.querySelectorAll("[data-buy]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      show(`${el.dataset.buy} — checkout coming soon`);
    });
  });
})();
