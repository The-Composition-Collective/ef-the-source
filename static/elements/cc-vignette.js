/*
 * Vignette element
 * Everglades Foundation
 */

class CCVignette extends HTMLElement {

  // ShadowDOM template
  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
        --element-width: 100%;
        --element-padding: 0;
      }

      .background {
        display: block;
        position: sticky;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: blue;
      }

      .background::slotted(*) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .foreground {
        display: grid;
        gap: 90vh;
        position: relative;
        padding: 0 20px 90vh;
      }

      .foreground::slotted(*) {
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
customElements.define("cc-vignette", CCVignette);
