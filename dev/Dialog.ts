class Dialog{

    static popupBox:Popup
    static boxNumber:number
    static instance:number

    constructor(instance:number){
        Dialog.boxNumber = 1
        Dialog.instance = instance
        Dialog.startConvo(instance)
    }

    static startConvo(instance:number){
        console.log(Dialog.boxNumber)
        switch(instance) {
            case 1:{
                switch(Dialog.boxNumber){
                    case 1:{
                        this.popupBox = new Popup("75vw", "10vh","15vw", "7.5vh","100100110101")
                        break
                    }
                    case 2:{
                        this.popupBox = new Popup("75vw", "10vh","15vw", "7.5vh","1001010111011101 01101000110010  100011110001010 111010100")
                        break
                    }
                    case 3:{
                        Game.sliderPuzzle()
                        break
                    }
                }
                break
            }
            case 2:{
                switch(Dialog.boxNumber){
                    case 1:{
                        this.popupBox = new Popup("50vw", "20vh","25vw", "40vh","1001010111011101 01101000110010  100011110001010 111010100")
                        break
                    }
                    case 2:{
                        this.popupBox = new Popup("50vw", "20vh","25vw", "40vh","0110000111011111111")
                        break
                    }
                    case 3:{
                        this.popupBox = new Popup("50vw", "20vh","25vw", "40vh","31414234")
                        break
                    }
                    case 4:{
                        Game.programPuzzle()
                        break
                    }
                }
                
            }
        }
    }

    static nextBox(){
        Dialog.boxNumber++
        Dialog.startConvo(Dialog.instance)
    }
}
