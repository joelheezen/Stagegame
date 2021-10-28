class Popup{

    private popup: HTMLElement
    constructor(width:string, heigth:string, xpos:string, ypos:string, text:string){
        console.log("popup created")
        let game = document.getElementsByTagName("game")[0]
        this.popup = document.createElement("popup")
        game.appendChild(this.popup)
        this.popup.style.width = width
        this.popup.style.height = heigth
        this.popup.style.left = xpos
        this.popup.style.top = ypos
        this.popup.innerHTML = text
        this.popup.addEventListener("click", () => this.clickedPopup())
    }

    clickedPopup(){
        this.popup.remove()
        Dialog.nextBox()
    }
}
