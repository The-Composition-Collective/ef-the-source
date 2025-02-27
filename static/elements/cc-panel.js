/*
 * Vignette element
 * Everglades Foundation
 */

class CCPanel extends HTMLElement {

  // ShadowDOM template
  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        position: relative;
        display: grid;
        place-items: var(--placement);
        width: 100vw;
        height: 100vh;
        padding: 24px;
        box-sizing: border-box;
        --placement: end start;
        --element-width: 100%;
      }

      .background::slotted(*) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .foreground::slotted(*) {
        position: relative;
        padding: 20px;
        background-color: white;
        max-width: 600px;
      }
    </style>

    <slot name="background" class="background"></slot>
    <slot class="foreground"></slot>
    `;
    return t;
  }

  // Fires when the element is instantiated
  constructor() {
    super();

    // Attach the ShadowDOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(this.template.content.cloneNode(true));
  }
}

// Define the elment
customElements.define("cc-panel", CCPanel);
