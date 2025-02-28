/*
 * Vignette element
 * Everglades Foundation
 */

class EFVignette extends HTMLElement {

  /*
   * Static observer
   */

  static observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.classList.add("animate");
        e.target.closest("ef-vignette").swap(e.target)
      }
    });
  }, {
    threshold: 0.8
  });

  /*
   * ShadowDOM template
   */

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
        width: 100vw;
        height: 100vh;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
        --element-width: 100%;
        --element-padding: 0;
      }

      .background {
        display: block;
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: darkgray;
      }

      .background::slotted(*) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity .5s ease;
      }

      .background::slotted(.active) {
        opacity: 1;
      }

      .foreground {
        position: relative;
        display: grid;
        grid-auto-rows: 100vh;
      }

      .foreground::slotted(*) {
        scroll-snap-align: start;
      }
    </style>

    <slot name="background" class="background"></slot>
    <slot class="foreground"></slot>
    `;
    return t;
  }

  /*
   * Fires when the element is instantiated
   */

  constructor() {
    super();

    // Attach the ShadowDOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(this.template.content.cloneNode(true));

    // Handle slot changes
    const slots = this.shadowRoot.querySelectorAll("slot");
    slots[1].addEventListener("slotchange", (e) => {
      slots[1].assignedElements().forEach(ele => EFVignette.observer.observe(ele));
    });
  }

  /*
   * Swaps media to match the panel
   */

  swap(ele) {
    const [media, panels] = this.shadowRoot.querySelectorAll("slot");
    const index = panels.assignedElements().indexOf(ele);

    media.assignedElements().forEach((e, i) => {
      e.classList.toggle("active", i == index);
    });
  }
}

/*
 * Define the elment
 */

customElements.define("ef-vignette", EFVignette);
