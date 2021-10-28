window.addEventListener("load", () => new Game())

class Game{
 
    static raspi :Raspi
    public dialog : Dialog
    static blurAmount:number

    constructor(){
        console.log("game created")
        Game.raspi = new Raspi("5vw", "7.5vh", "7.5vw","2vh")
        this.dialog = new Dialog(1)
        let html = <HTMLElement>document.getElementsByTagName("html")[0] 
        if (localStorage.getItem("blur") == undefined){
            Game.blurAmount = 2.5
        }
        else {
            Game.blurAmount = parseInt(localStorage.getItem("blur")!)
        }
        
        html.style.filter = `blur(${Game.blurAmount}px)`
    }

    static sliderPuzzle(){
        console.log("act one started")
        let cameraSliders = document.createElement("sliderBox")
        let game = document.getElementsByTagName("game")[0]
        let readyButton = document.createElement("readyButton")
        game.appendChild(cameraSliders)
        game.appendChild(readyButton)
        readyButton.addEventListener("click",() => Game.saveBlur())
        for (let i = 0; i < 3;i++){
            let slider = document.createElement("input")
            cameraSliders.appendChild(slider)
            slider.type = "range"
            slider.min = "0"
            slider.max = "50"
            slider.value = ((i * 10)+15).toString()
            slider.className = "slider"
            slider.id = "slider" + i
            slider.addEventListener("input", () => Game.sliderChanged())
        }

        
    }

    static sliderChanged(){
        let slider0 = parseInt((<HTMLInputElement>document.getElementById("slider0")).value)
        let slider1 = parseInt((<HTMLInputElement>document.getElementById("slider1")).value)
        let slider2 = parseInt((<HTMLInputElement>document.getElementById("slider2")).value)
        Game.blurAmount = ((2*(slider0)) + (slider1/4) + (slider2-50))
        

        
        let html = <HTMLElement>document.getElementsByTagName("html")[0]
        if (Game.blurAmount < 0) {
            Game.blurAmount = Game.blurAmount *-1
        }
        console.log(Game.blurAmount)
        html.style.filter = `blur(${ Game.blurAmount.toString()}px)`
    }

    static saveBlur(){
        localStorage.setItem('blur', Game.blurAmount.toString() )
    }
}