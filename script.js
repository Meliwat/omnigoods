// Omnigoods — minimal interactivity
// (a) fake-buy demo toast, (b) fake newsletter handler, (c) card reveal on scroll

(() => {
  const toast = document.getElementById("toast");
  let toastTimer;
  const showToast = (msg) => {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  };

  // Fake buy buttons
  document.querySelectorAll("[data-buy]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const v = el.dataset.buy;
      showToast(`${v} — checkout coming soon`);
    });
  });

  // Fake "read a fragment"
  document.querySelectorAll("[data-sample]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("Sample chapter — coming soon");
    });
  });

  // Newsletter form (demo only)
  const form = document.getElementById("newsForm");
  const note = document.getElementById("newsNote");
  if (form && note) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]')?.value?.trim();
      if (!email || !email.includes("@")) {
        note.textContent = "Please enter a valid email.";
        note.classList.remove("success");
        return;
      }
      note.textContent = `Thank you. The next letter will arrive at ${email}.`;
      note.classList.add("success");
      form.querySelector('input[type="email"]').value = "";
    });
  }

  // Card reveal on scroll
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    document.querySelectorAll(".card").forEach((c) => io.observe(c));
  } else {
    document.querySelectorAll(".card").forEach((c) => c.classList.add("in"));
  }
})();
