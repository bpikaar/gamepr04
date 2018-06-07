class Game {

    bombes : Array<Bomb>

    constructor() {
        console.log("New game")
        
        this.bombes = new Array()
        for (let index = 0; index < 3; index++) {
                this.bombes.push(new Bomb())
        }
        this.gameLoop()

    }

    gameLoop() : void {
    for(let bomb of this.bombes){
        bomb.move()

    }
        requestAnimationFrame( () => this.gameLoop() )

    }
}
window.addEventListener("load", () => new Game())
