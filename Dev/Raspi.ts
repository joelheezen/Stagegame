class Raspi{

    private raspberry:HTMLElement
    constructor(){
        console.log("raspi created")
        this.raspberry = document.createElement("raspi")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.raspberry)
    }


}