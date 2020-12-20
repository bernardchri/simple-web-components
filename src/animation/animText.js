const template = document.createElement("template");
template.innerHTML = `<style>
</style>
<div class="AnimText">
    <slot>texte par défaut</slot>
</div>`;

class SimpleAnimText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  // set content(v){
  //   this._content = v;
  // }

  // get content(){
  //   return this._content;
  // }

  connectedCallback() {
    console.log(this.shadowRoot.querySelector(".AnimText slot").textContent)
    // this.createSpanWrappers();
  }

  createSpanWrappers() {
    const textWrapper = this.shadowRoot.querySelector(".AnimText");

    const letters = [];
    for (let i in textWrapper.innerText) {
      letters.push(textWrapper.innerHTML[i]);
    }

    textWrapper.innerHTML = "";
   
    const newContent = letters.forEach((letter) => {
        const spanWrapper = document.createElement("span");
        spanWrapper.classList.add("wL")
        const span = document.createElement("span");
        span.innerHTML = letter;
        
        spanWrapper.appendChild(span);

        textWrapper.appendChild(spanWrapper);
    });
  }

  disconnectedCallback() {}
}

window.customElements.define("s-anim-text", SimpleAnimText);
