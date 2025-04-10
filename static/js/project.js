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

const animationObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
}, {
  threshold: 0.1
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

document.querySelectorAll(".animate-group").forEach(ele => {
  let delay = 0.6;
  let children = Array.from(ele.children);

  children.forEach((item, index) => {
    item.style.transitionDelay = `${delay * index}s`;
  });

  animationObserver.observe(ele);
});
