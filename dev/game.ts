class Game {

    bombes : Array<Bomb>
    // set the bombs into an array
    constructor() {
        console.log("New game")
        
        this.bombes = new Array()
        for (let index = 0; index < 10; index++) {
                this.bombes.push(new Bomb(this))
            // makes sure that only 3 boms fall down.
           
        
        }
        this.gameLoop()

    }

    gameLoop() : void {
    for(let bomb of this.bombes){
        bomb.move()
        // let the bombs move.

    }
        requestAnimationFrame( () => this.gameLoop() )

    }

    public removeBomb(bomb : Bomb) {
        // remove bomb from bombs array
        // splice
        let index =  this.bombes.indexOf(bomb)
        this.bombes.splice(index, 1)

   

    }


}
window.addEventListener("load", () => new Game())
// on load page the game starts.
