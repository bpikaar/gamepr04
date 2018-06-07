class Bomb {

    htmlElement : HTMLElement
    x : number
    y : number

    speedX : number
    speedY : number

    constructor(){


       this.htmlElement = document.createElement("bomb")
        document.body.appendChild(this.htmlElement)

        this.htmlElement.addEventListener("click", this.clickHandler);



        this.x = 5
        this.y = 5

        this.speedX = Math.random() * 2 + 2
        this.speedY = Math.random() * 2 + 2
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
        let bomb = this.htmlElement;
        bomb.classList.add("gone");
        console.log(bomb)
    }



    draw() : void {
        this.htmlElement.style.transform =
            "translate("+this.x+"100px, "+this.y+"100px)"

    }
}