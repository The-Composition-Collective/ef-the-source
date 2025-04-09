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

const gridObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
}, {
  threshold: 0.2
});

/*
 * Panels
 */

document.querySelectorAll("video").forEach(ele => {
  videoObserver.observe(ele);
});

/*
 * Facts
 */

document.querySelectorAll(".grid").forEach(ele => {
  gridObserver.observe(ele);
});
