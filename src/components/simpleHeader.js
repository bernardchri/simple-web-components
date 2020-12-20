

const template = document.createElement("template");
template.innerHTML = `
<style>
    .Header{
        font-size: 16px;
        outline: 1px solid;
        height: var(--height, 10px);
    }
    .Header_icon{
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .Header_menu{
        display: flex;
        align-items:center;
    }
    .Header_wrapper{
        padding: 10px;
        display: flex;
        width:100%;
        max-width: calc( 1024px - 40px) ;
        margin:auto;
        outline: 1px dashed;
        justify-content: space-between;
    }
    .Header_tabs,
    ::slotted(ul)  {
        display: flex;
        margin: 10px;
        list-style-type:none;
    }
    .Header_toggle{
        display:flex
    }

</style>

<div class="Header">
    <div class="Header_wrapper">
        <slot class="Header_icon" name="icon">icon</slot>
        <div class="Header_menu">
            <slot class="Header_tabs" name="tabs"></slot>
            <slot name="toggle" class="Header_toggle">
                <slot name="open" class="Header_open">|||</slot>
                <slot name="close" class="Header_close">&times;</slot>
            </slot>
        </div>
     
    </div>
</div>`;



class SimpleHeader extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}

window.customElements.define("s-header", SimpleHeader)