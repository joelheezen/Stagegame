window.addEventListener("load", () => new Game())

class Game{
 
    static raspi :Raspi
    public dialog : Dialog

    constructor(){
        console.log("game created")
        Game.raspi = new Raspi("5vw", "7.5vh", "7.5vw","2vh")
        this.dialog = new Dialog(1)
        let html = <HTMLElement>document.getElementsByTagName("html")[0] 
        html.style.filter = "blur(2.5px)"
    }

    static sliderPuzzle(){
        console.log("act one started")
        let cameraSliders = document.createElement("sliderBox")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(cameraSliders)
        for (let i = 0; i < 3;i++){
            let slider = document.createElement("input")
            cameraSliders.appendChild(slider)
            slider.type = "range"
            slider.min = "0"
            slider.max = "40"
            slider.value = "20"
            slider.className = "slider"
            slider.id = "slider" + i
            slider.addEventListener("input", () => Game.sliderChanged())
        }

        
    }

    static sliderChanged(){
        let slider0 = parseInt((<HTMLInputElement>document.getElementById("slider0")).value)
        let slider1 = parseInt((<HTMLInputElement>document.getElementById("slider1")).value)
        let slider2 = parseInt((<HTMLInputElement>document.getElementById("slider2")).value)
        console.log(slider0)
        console.log(slider1)
        console.log(slider2)
        
        

        if (slider0 == 10 && slider1 == 30 && slider2 == 37){
            console.log("sliders are correct")
        }

    }
}