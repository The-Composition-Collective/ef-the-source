/*
 * Intersection Observers
 */

const videoObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.pause();
    }
  })
}, {
  threshold: 0.5
});

const animateObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("animate")
    }
  });
}, {
  threshold: 1
});

/*
 * Panels
 */

document.querySelectorAll("video.background").forEach(ele => {
  videoObserver.observe(ele);
});

/*
 * Facts
 */

document.querySelectorAll(".fact").forEach(ele => {
  animateObserver.observe(ele);
});
