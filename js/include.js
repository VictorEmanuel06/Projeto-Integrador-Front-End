document.addEventListener("DOMContentLoaded", () => {
  /* ========= NAV ========= */
  fetch("./components/nav.html")
    .then((response) => response.text())
    .then((data) => {
      const nav = document.getElementById("nav");
      if (nav) nav.innerHTML = data;
    });

  /* ========= FOOTER ========= */
  fetch("./components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      const footer = document.getElementById("footer");
      if (footer) footer.innerHTML = data;
    });
});
