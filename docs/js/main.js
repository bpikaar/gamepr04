"use strict";
var Bomb = (function () {
    function Bomb() {
        var _this = this;
        this.htmlElement = document.createElement("bomb");
        document.body.appendChild(this.htmlElement);
        this.htmlElement.addEventListener("click", function (e) { return _this.clickHandler(); });
        this.x = 2;
        this.y = 5;
        this.speedX = Math.random() * 2 + 1;
        this.speedY = Math.random() * 2 + 2;
    }
    Bomb.prototype.move = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y + this.htmlElement.clientHeight > window.innerHeight || this.y < 0) {
            var bomb = this.htmlElement;
            bomb.classList.add("explode");
            console.log(bomb);
            this.speedY = 0;
            this.speedX = 0;
        }
        this.draw();
    };
    Bomb.prototype.clickHandler = function () {
        this.htmlElement.remove();
    };
    Bomb.prototype.draw = function () {
        this.htmlElement.style.transform =
            "translate(" + this.x + "100px, " + this.y + "100px)";
    };
    return Bomb;
}());
var Game = (function () {
    function Game() {
        console.log("New game");
        this.bombes = new Array();
        for (var index = 0; index < 3; index++) {
            this.bombes.push(new Bomb());
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.bombes; _i < _a.length; _i++) {
            var bomb = _a[_i];
            bomb.move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map