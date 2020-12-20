const template = document.createElement("template");
template.innerHTML = `
<style>
.sButton{
    color:red;
    padding:7px 10px 8px;
    color:white;
    background-color: #1184fc;
    border-radius:3px;
    display: inline-block;
    transition: all 150ms ease;
}

@media only screen and (max-width: 480px) {
    .sButton {
      display: block;
      text-align: center;
      margin: 10px 0 10px 0;
    }
  }

.sButton:not([disabled]):hover{
    cursor:pointer;
    filter: brightness(130%);
}

.sButton:not([disabled]):active{
    filter: brightness(90%);
    transform:scale(0.95)
}

.sButton[disabled]{
    // filter: grayscale(100%);
    filter : grayscale(80%) brightness(50%) ;
}

.sButton[disabled]:hover{
    cursor : not-allowed;
}

</style>
<div class="sButton">
    <i class="sButton_icon"></i>
    <slot class="sButton_txt">
        <span>En savoir plus</span> 
    </slot>
</button>`

class sButton extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        //props
        this.color = this.getAttribute("color");
        this.iconClassName = this.getAttribute("iconClassName");

        //DOM
        const container = this.shadowRoot.querySelector('.sButton')
        const label = this.shadowRoot.querySelector(".sButton_txt")
        const icon = this.shadowRoot.querySelector('.sButton_icon')
        
        container.style.backgroundColor = this.color;
    }
}

window.customElements.define("s-button", sButton)