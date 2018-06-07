class Bomb {

    htmlElement : HTMLElement
    x : number
    y : number

    speedX : number
    speedY : number
// set variables.
    constructor(){


       this.htmlElement = document.createElement("bomb")
        document.body.appendChild(this.htmlElement)
        // make HTML element for the bomb.
        this.htmlElement.addEventListener("click", this.clickHandler);
// add quick event.


        this.x = 5
        this.y = 5
        // give static values
        this.speedX = Math.random() * 2 + 2
        this.speedY = Math.random() * 2 + 2
        // give random values.
    }

    move() : void {


        this.x += this.speedX
        this.y += this.speedY

        if(this.x + this.htmlElement.clientWidth > window.innerWidth || this.x < 0) {
            this.speedX *= -1

        }

        if(this.y + this.htmlElement.clientHeight > window.innerHeight || this.y < 0) {
            this.speedY *= -1

        }
        this.draw()
    }

    clickHandler():void{
        // clickhandler for the bomb
        let bomb = this.htmlElement;
        bomb.classList.add("gone");
        console.log(bomb)
    }



    draw() : void {
        this.htmlElement.style.transform =
            "translate("+this.x+"100px, "+this.y+"100px)"
        // make sure the bombs move.

    }
}