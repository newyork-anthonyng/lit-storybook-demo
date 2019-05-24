import { LitElement, html } from "lit-element";

class MyCounter extends LitElement {
  constructor() {
    super();
    this.count = 0;
  }

  static get properties() {
    return {
      count: Number
    };
  }

  handleButtonClick() {
    this.count++;
  }

  render() {
    return html`
      <h1>Count: ${this.count}</h1>
      <button @click=${this.handleButtonClick}>Increment</button>
    `;
  }
}

customElements.define("my-counter", MyCounter);
