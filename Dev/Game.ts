window.addEventListener("load", () => new Game())

class Game{

    private player :Player 
    static raspi :Raspi
    public dialog : Dialog

    constructor(){
        console.log("game created")
        Game.raspi = new Raspi()
        this.dialog = new Dialog(1)
    }
    
    private dealDmg(dmg:number){
        console.log("taking dmg")
        console.log(this.player.hp)
        this.player.takeDmg(dmg)
    }

    static act1(){
        console.log("act one started")
    }
}