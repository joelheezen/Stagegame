class Dialog{

    static popupBox:Popup
    static boxNumber = 1
    static instance:number

    constructor(instance:number){
        Dialog.instance = instance
        Dialog.startConvo(instance)
    }

    static startConvo(instance:number){
        switch(instance) {
            case 1:{
                switch(Dialog.boxNumber){
                    case 1:{
                        console.log("instance one has been called")
                        this.popupBox = new Popup("75vw", "10vh","15vw", "7.5vh","100100110101")
                        break
                    }
                    case 2:{
                        console.log("next box is here so new popup should go up")
                        this.popupBox = new Popup("75vw", "10vh","15vw", "7.5vh","1001010111011101 01101000110010  100011110001010 111010100")
                        break
                    }
                    case 3:{
                        console.log("ending dialog")
                        Game.sliderPuzzle()
                        break
                    }
                }
                break
            }
            case 2:{
                console.log("instance two has been called")
                break
            }
        }
    }

    static nextBox(){
        console.log("next box called")
        Dialog.boxNumber++
        console.log(Dialog.boxNumber)
        Dialog.startConvo(Dialog.instance)
    }
}
