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
        this.htmlElement.addEventListener("click",(e:Event) => this.clickHandler())
        // add quick event.


        this.x = 2
        this.y = 5
        // give static values
        this.speedX = Math.random() * 2 + 1
        this.speedY = Math.random() * 2 + 2
        // give random values.
    }

    move() : void {


        this.x += this.speedX
        this.y += this.speedY



        if(this.y + this.htmlElement.clientHeight > window.innerHeight || this.y < 0) {
            let bomb = this.htmlElement;
            bomb.classList.add("explode");
            console.log(bomb)
            this.speedY = 0
            this.speedX = 0
        }



        this.draw()
    }

    clickHandler(){
        this.htmlElement.remove()
    }


    draw() : void {
        this.htmlElement.style.transform =
            "translate("+this.x+"100px, "+this.y+"100px)"
        // make sure the bombs move.

    }
}