// const templateButton = document.createElement("template");
// templateButton.innerHTML = `
// <style>
// </style>
// <div>
// </div>
// `;

// class SimpleToggle extends HTMLButtonElement{
//     constructor(){
//         super();

//         this.addEventListener('click', () => {
//             alert('Great job!');
//            });
//     }
// }


// window.customElements.define("simple-button", SimpleToggle, {extends: 'button'})

class SimpleToggle extends HTMLElement {
    constructor() {
      super();
      
      this.addEventListener('click', () => {
       alert('Great job!');
      });

      this.innerHTML = 'button'    
    }
  }
window.customElements.define('s-toggle', SimpleToggle);