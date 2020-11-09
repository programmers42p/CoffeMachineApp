import {Coffee} from './coffee.js'
import {Tea} from './tea.js'
class CoffeeMachine {
    start () {

    }
    stop(){


    }
    pour(){

    }

}

function customCoffee(){
    let coffeAmount = document.getElementById("coffeeAmount");
    coffeAmount.removeAttribute("disabled");

    let coffeeMilk = document.getElementById("coffeeMilk");
    coffeeMilk.removeAttribute("disabled");

    let coffeeLemon = document.getElementById("coffeeLemon");
    coffeeLemon.removeAttribute("disabled");

    let coffeeIce = document.getElementById("coffeeIce");
    coffeeIce.removeAttribute("disabled");

}
function specificCoffee(){
    let coffeAmount = document.getElementById("coffeeAmount");
    coffeAmount.setAttribute("disabled", "disabled");

    let coffeeMilk = document.getElementById("coffeeMilk");
    coffeeMilk.setAttribute("disabled", "disabled");

    let coffeeIce = document.getElementById("coffeeIce");
    coffeeIce.setAttribute("disabled", "disabled");

    let coffeeLemon = document.getElementById("coffeeLemon");
    coffeeLemon.setAttribute("disabled", "disabled");

    c
}
let espresso = document.getElementById("espresso");
espresso.onclick = specificCoffee;

let custom = document.getElementById("custom");
custom.onclick = customCoffee;

let cappuccino = document.getElementById("cappuccino");
cappuccino.onclick = specificCoffee;

let americano = document.getElementById("americano");
americano.onclick = specificCoffee;

let latte = document.getElementById("latte");
latte.onclick = specificCoffee;

let frappe = document.getElementById("frappe");
frappe.onclick = specificCoffee;
