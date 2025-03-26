/*
 * Scrolling Panel
 */

class ScrollingPanel extends HTMLElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: flex !important;
        gap: var(--space);
        overflow-x: auto;
      }

      ::slotted(*) {
        align-self: start;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    </style>

    <slot></slot>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(this.template.content.cloneNode(true));
    this.observer = new IntersectionObserver(this.handleIntersection, { threshold: 0 });
  }

  connectedCallback() {
    this.observer.observe(this); // Observe the custom element itself
    this.nextElementSibling.style.setProperty("--buffer", `calc(100vh * ${this.children.length + 1}`);
  }

  disconnectedCallback() {
    this.observer.unobserve(this);
  }

  updateContainers() {
    this.containers = Array.from(this.children);
  }

  handleIntersection = (entries) => {
    entries.forEach(entry => {
      this.isIntersecting = entry.isIntersecting;
      this.startAnimationIfNeeded();
      if (!this.isIntersecting) {
        this.stopAnimation();
      }
    });
  };

  startAnimationIfNeeded = () => {
    if (this.isIntersecting && !this.animationFrameId) {
      this.animate();
    }
  };

  stopAnimation = () => {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  };

  animate = () => {
    if (!this.isIntersecting) {
      this.stopAnimation();
      return;
    }

    const rect = this.parentElement.getBoundingClientRect();
    this.scrollLeft = rect.top * -1;
    this.animationFrameId = requestAnimationFrame(this.animate);
  };
}

customElements.define("scrolling-panel", ScrollingPanel);
