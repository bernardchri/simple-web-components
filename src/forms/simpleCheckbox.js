const template = document.createElement("template");
template.innerHTML = `
<style>

</style>
<label>
<input type="checkbox"/>
    <slot>
        <span class="SimpleButton_label">button</span> 
    </slot>
</label>`;

class simpleCheckbox extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("simple-checkbox", simpleCheckbox);
