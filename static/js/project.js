/*
 * Videos
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

document.querySelectorAll("video").forEach(ele => {
  videoObserver.observe(ele);
});

/*
 * Panel animations
 */

const animationObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".animate-group").forEach(ele => {
  let delay = 0.6;
  let children = Array.from(ele.children);

  children.forEach((item, index) => {
    item.style.transitionDelay = `${delay * index}s`;
  });

  animationObserver.observe(ele);
});

/*
 * Strips
 */

const stripObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.intervalId = setInterval(next.bind(entry.target), 5000);
    } else {
      clearInterval(entry.target.intervalId);
    }
  });
}, {
  threshold: 1
});

document.querySelectorAll(".strip").forEach(ele => {
  stripObserver.observe(ele);
});

function next() {
  const current = Array.from(this.children).find(ele => {
    const bbox = ele.getBoundingClientRect();
    return bbox.left >= 0 && bbox.right <= window.innerWidth;
  });

  const next = current.nextElementSibling;
  next?.scrollIntoView({ behavior: "smooth" });
}
