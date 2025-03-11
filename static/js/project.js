/*
 * Intersection Observer to activate background
 */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      e.target.play();
    } else {
      e.target.pause();
    }
  })
}, {
  threshold: 0.5
});

/*
 * Panels
 */

document.querySelectorAll("video.background").forEach(ele => {
  observer.observe(ele);
});
