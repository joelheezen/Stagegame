"use strict";
var Dialog = (function () {
    function Dialog(instance) {
        Dialog.instance = instance;
        Dialog.startConvo(instance);
    }
    Dialog.startConvo = function (instance) {
        switch (instance) {
            case 1: {
                switch (Dialog.boxNumber) {
                    case 1: {
                        console.log("instance one has been called");
                        this.popupBox = new Popup("1000px", "1000px", "50px", "50px", "testing this popup");
                        break;
                    }
                    case 2: {
                        console.log("next box is here so new popup should go up");
                        this.popupBox = new Popup("1000px", "1000px", "50px", "50px", "second popup test");
                        break;
                    }
                    case 3: {
                        console.log("ending dialog");
                        Game.act1();
                        break;
                    }
                }
                break;
            }
            case 2: {
                console.log("instance two has been called");
                break;
            }
        }
    };
    Dialog.nextBox = function () {
        console.log("next box called");
        Dialog.boxNumber++;
        console.log(Dialog.boxNumber);
        Dialog.startConvo(Dialog.instance);
    };
    Dialog.boxNumber = 1;
    return Dialog;
}());
var Popup = (function () {
    function Popup(width, heigth, xpos, ypos, text) {
        var _this = this;
        console.log("popup created");
        var game = document.getElementsByTagName("game")[0];
        this.popup = document.createElement("popup");
        game.appendChild(this.popup);
        this.popup.style.width = width;
        this.popup.style.height = heigth;
        this.popup.style.left = xpos;
        this.popup.style.top = ypos;
        this.popup.innerHTML = text;
        this.popup.addEventListener("click", function () { return _this.clickedPopup(); });
    }
    Popup.prototype.clickedPopup = function () {
        this.popup.remove();
        Dialog.nextBox();
    };
    return Popup;
}());
var Raspi = (function () {
    function Raspi() {
        console.log("raspi created");
        this.raspberry = document.createElement("raspi");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.raspberry);
    }
    return Raspi;
}());
window.addEventListener("load", function () { return new Game(); });
var Game = (function () {
    function Game() {
        console.log("game created");
        Game.raspi = new Raspi();
        this.dialog = new Dialog(1);
    }
    Game.prototype.dealDmg = function (dmg) {
        console.log("taking dmg");
        console.log(this.player.hp);
        this.player.takeDmg(dmg);
    };
    Game.act1 = function () {
        console.log("act one started");
    };
    return Game;
}());
var Player = (function () {
    function Player(health) {
        console.log("player created");
        this.hp = health;
        console.log(this.hp);
        var game = document.getElementsByTagName("game")[0];
        this.player = document.createElement("player");
        game.appendChild(this.player);
    }
    Player.prototype.takeDmg = function (amount) {
        this.hp = this.hp - amount;
        console.log(this.hp);
        if (this.hp <= 0) {
            console.log("player is dead");
            this.player.remove();
        }
    };
    return Player;
}());
//# sourceMappingURL=main.js.map