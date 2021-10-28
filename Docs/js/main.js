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
                        this.popupBox = new Popup("75vw", "10vh", "15vw", "7.5vh", "100100110101");
                        break;
                    }
                    case 2: {
                        console.log("next box is here so new popup should go up");
                        this.popupBox = new Popup("75vw", "10vh", "15vw", "7.5vh", "1001010111011101 01101000110010  100011110001010 111010100");
                        break;
                    }
                    case 3: {
                        console.log("ending dialog");
                        Game.sliderPuzzle();
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
    function Raspi(width, height, xpos, ypos) {
        console.log("raspi created");
        this.raspberry = document.createElement("raspi");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.raspberry);
        this.raspberry.style.width = width;
        this.raspberry.style.height = height;
        this.raspberry.style.left = xpos;
        this.raspberry.style.top = ypos;
    }
    Raspi.raspiChange = function () {
    };
    return Raspi;
}());
window.addEventListener("load", function () { return new Game(); });
var Game = (function () {
    function Game() {
        console.log("game created");
        Game.raspi = new Raspi("5vw", "7.5vh", "7.5vw", "2vh");
        this.dialog = new Dialog(1);
        var html = document.getElementsByTagName("html")[0];
        if (localStorage.getItem("blur") == undefined) {
            Game.blurAmount = 2.5;
        }
        else {
            Game.blurAmount = parseInt(localStorage.getItem("blur"));
        }
        html.style.filter = "blur(" + Game.blurAmount + "px)";
    }
    Game.sliderPuzzle = function () {
        console.log("act one started");
        var cameraSliders = document.createElement("sliderBox");
        var game = document.getElementsByTagName("game")[0];
        var readyButton = document.createElement("readyButton");
        game.appendChild(cameraSliders);
        game.appendChild(readyButton);
        readyButton.addEventListener("click", function () { return Game.saveBlur(); });
        for (var i = 0; i < 3; i++) {
            var slider = document.createElement("input");
            cameraSliders.appendChild(slider);
            slider.type = "range";
            slider.min = "0";
            slider.max = "50";
            slider.value = ((i * 10) + 15).toString();
            slider.className = "slider";
            slider.id = "slider" + i;
            slider.addEventListener("input", function () { return Game.sliderChanged(); });
        }
    };
    Game.sliderChanged = function () {
        var slider0 = parseInt(document.getElementById("slider0").value);
        var slider1 = parseInt(document.getElementById("slider1").value);
        var slider2 = parseInt(document.getElementById("slider2").value);
        Game.blurAmount = ((2 * (slider0)) + (slider1 / 4) + (slider2 - 50));
        var html = document.getElementsByTagName("html")[0];
        if (Game.blurAmount < 0) {
            Game.blurAmount = Game.blurAmount * -1;
        }
        console.log(Game.blurAmount);
        html.style.filter = "blur(" + Game.blurAmount.toString() + "px)";
    };
    Game.saveBlur = function () {
        localStorage.setItem('blur', Game.blurAmount.toString());
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