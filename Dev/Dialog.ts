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
                        this.popupBox = new Popup("1000px", "1000px","50px", "50px","testing this popup")
                        break
                    }
                    case 2:{
                        console.log("next box is here so new popup should go up")
                        this.popupBox = new Popup("1000px", "1000px","50px", "50px","second popup test")
                        break
                    }
                    case 3:{
                        console.log("ending dialog")
                        Game.act1()
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