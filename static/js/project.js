/*
 * Intersection Observer to activate background
 */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    const vignette = e.target.closest(".vignette");

    if(vignette) {
      vignette.classList.toggle("mask", e.isIntersecting == false);
    }
  })
});

/*
 * Panels
 */

document.querySelectorAll(".cover").forEach(ele => {
  observer.observe(ele);
});
