/*
 * Intersection Observer to activate background
 */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    e.target.classList.toggle("active", e.isIntersecting);
  })
}, {
  rootMargin: "0px 0px -100% 0px"
});

/*
 * Panels
 */

document.querySelectorAll(".panel").forEach(ele => {
  observer.observe(ele);
});
