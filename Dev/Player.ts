class Player{

    public hp :number
    private player: HTMLElement
    constructor(health:number){
        console.log("player created")
        this.hp = health
        console.log(this.hp)
        let game = document.getElementsByTagName("game")[0]
        this.player = document.createElement("player")
        game.appendChild(this.player)
    }
    
    takeDmg(amount:number){
        this.hp = this.hp - amount
        console.log(this.hp)
        if (this.hp <= 0){
            console.log("player is dead")
            this.player.remove()
        }
    }
}