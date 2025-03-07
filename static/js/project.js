/*
 * Intersection Observer to activate background
 */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      e.target.play();
    }
  })
});

/*
 * Panels
 */

document.querySelectorAll("video.background").forEach(ele => {
  observer.observe(ele);
});
