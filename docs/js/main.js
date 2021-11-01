"use strict";
var Dialog = (function () {
    function Dialog(instance) {
        Dialog.boxNumber = 1;
        Dialog.instance = instance;
        Dialog.startConvo(instance);
    }
    Dialog.startConvo = function (instance) {
        console.log(Dialog.boxNumber);
        switch (instance) {
            case 1: {
                switch (Dialog.boxNumber) {
                    case 1: {
                        this.popupBox = new Popup("75vw", "10vh", "15vw", "7.5vh", "100100110101");
                        break;
                    }
                    case 2: {
                        this.popupBox = new Popup("75vw", "10vh", "15vw", "7.5vh", "1001010111011101 01101000110010  100011110001010 111010100");
                        break;
                    }
                    case 3: {
                        Game.sliderPuzzle();
                        break;
                    }
                }
                break;
            }
            case 2: {
                switch (Dialog.boxNumber) {
                    case 1: {
                        this.popupBox = new Popup("50vw", "20vh", "25vw", "40vh", "1001010111011101 01101000110010  100011110001010 111010100");
                        break;
                    }
                    case 2: {
                        this.popupBox = new Popup("50vw", "20vh", "25vw", "40vh", "0110000111011111111");
                        break;
                    }
                    case 3: {
                        this.popupBox = new Popup("50vw", "20vh", "25vw", "40vh", "31414234");
                        break;
                    }
                    case 4: {
                        Game.programPuzzle();
                        break;
                    }
                }
            }
        }
    };
    Dialog.nextBox = function () {
        Dialog.boxNumber++;
        Dialog.startConvo(Dialog.instance);
    };
    return Dialog;
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
            slider.value = (0).toString();
            slider.className = "slider";
            slider.id = "slider" + i;
            slider.addEventListener("input", function () { return Game.sliderChanged(); });
        }
    };
    Game.sliderChanged = function () {
        var slider0 = parseInt(document.getElementById("slider0").value);
        var slider1 = parseInt(document.getElementById("slider1").value);
        var slider2 = parseInt(document.getElementById("slider2").value);
        Game.blurAmount = ((slider0 * 5) - 150) + (slider1 + 7) - ((slider2 * 0.5) + 70);
        var html = document.getElementsByTagName("html")[0];
        if (Game.blurAmount < 0) {
            Game.blurAmount = Game.blurAmount * -1;
        }
        if (Game.blurAmount > 5) {
            Game.blurAmount = 5;
        }
        console.log(Game.blurAmount);
        html.style.filter = "blur(" + Game.blurAmount.toString() + "px)";
    };
    Game.saveBlur = function () {
        localStorage.setItem('blur', Game.blurAmount.toString());
        var sliderBox = document.getElementsByTagName("sliderbox")[0];
        sliderBox.remove();
        var readyButton = document.getElementsByTagName("readybutton")[0];
        readyButton.remove();
        Raspi.delete();
        Game.setAct2();
    };
    Game.setAct2 = function () {
        Game.raspi = new Raspi("10vw", "10vh", "5vw", "40vh");
        new Dialog(2);
    };
    Game.programPuzzle = function () {
        console.log("starting puzzle");
        var questionSquare = document.createElement("questionsquare");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(questionSquare);
        for (var i = 0; i < 3; i++) {
            var answerSquare = document.createElement("answersquare");
            game.appendChild(answerSquare);
        }
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
    Raspi.delete = function () {
        var raspberry = document.getElementsByTagName("raspi")[0];
        raspberry.remove();
    };
    return Raspi;
}());
//# sourceMappingURL=main.js.map