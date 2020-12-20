const template = document.createElement("template");
template.innerHTML = `
<style>
    .sPush {
      display: flex;
      flex-wrap: wrap;
      width:300px;
      margin: 30px;
      background-color: #fff;
      box-shadow: 0px 3px 3px #999999;
      border-radius: 15px;
      transition: 250ms ease;
      font-family: monospace, sans-serif;
    }

    .sPush:hover{
        transform: translateY(-10px);
        box-shadow: 0px 10px 10px rgba(200,200,200, 0.9);
    }
    .sPush a{
        text-decoration: none;
        color: #333;
    }
    
    .sPush_wrapper {
        display: bloc;
        margin:20px;
    }
    .sPush_img{
        display: flex;
        
    }
    .sPush_img img{
        border-radius: 5px;
        width:100%;
        display: block;
        height: 100%;
        margin: 0;
        line-height:1;
        padding: 0;
        
    }
    .sPush_description{
        margin-top: 15px;
        line-height:1.25em;
        font-size: 14px;
       
    }

    
</style>
<section class="sPush">
    <a href="" target="_blank" >
        <div class="sPush_wrapper">
        <div class="sPush_img">
            <img src="" alt="" />
        </div>
        <div class="sPush_title">
            <h2></h2>
        </div>
        <div class="sPush_description">
        texte descriptif
        </div>
        </div>
    </a>
</section>
`

class SimplePush extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.setImage();
        this.setTitle();
        this.setLink();
        this.setDescription();
    }

    getLink(){
        return this.getAttribute("link");
    }
    setLink(){
        if(this.getLink()){
            this.shadowRoot.querySelector(".sPush > a").href = this.getLink()
        }
    }

    getTitle(){
        return this.getAttribute("title");
    }

    setTitle(){
        if(this.getTitle()){
            this.shadowRoot.querySelector(".sPush_title h2").innerHTML = this.getTitle();
        }else{
            this.shadowRoot.querySelector(".sPush_title").remove();
        }
    }

    getDescription(){
        return this.getAttribute("description");
    }

    setDescription(){
      
        if(this.getDescription()){
            this.shadowRoot.querySelector(".sPush_description").innerHTML = this.getDescription();
        }else{
            this.shadowRoot.querySelector(".sPush_description").remove();
        }
    }

    getImage(){
        return this.getAttribute("img");
    }

    setImage(){
        this.image = this.shadowRoot.querySelector(".sPush_img img");
        if(this.getImage()){
            this.image.src = this.getImage();
        }else{
            this.image.src = NO_IMAGE;
        }
        this.image.alt = this.getAttribute("alt");
    }
}


const NO_IMAGE = "data:image/png;base64,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"

window.customElements.define("s-push", SimplePush)