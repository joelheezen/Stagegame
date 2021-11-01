class Raspi{

    private raspberry:HTMLElement
    
    constructor(width:string, height:string, xpos:string, ypos:string){
        console.log("raspi created")
        this.raspberry = document.createElement("raspi")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.raspberry)
        this.raspberry.style.width = width
        this.raspberry.style.height = height
        this.raspberry.style.left = xpos
        this.raspberry.style.top = ypos
    }

    static delete(){
        let raspberry = document.getElementsByTagName("raspi")[0]
        raspberry.remove() 
    }


}
