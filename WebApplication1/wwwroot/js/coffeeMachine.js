import {Coffee} from './coffee.js'
import { Tea } from './tea.js'
class CoffeeMachine {
    start() {
        let teaButton = document.getElementById("teaButton");
        teaButton.removeAttribute("disabled");

        let coffeeButton = document.getElementById("coffeeButton");
        coffeeButton.removeAttribute("disabled");
        
    }
    stop(){
        let teaButton = document.getElementById("teaButton");
        teaButton.setAttribute("disabled", "disabled");

        let coffeeButton = document.getElementById("coffeeButton");
        coffeeButton.setAttribute("disabled", "disabled");

    }
    pour(){

    }

}

let machine = new CoffeeMachine();
let statusStart = document.getElementById("start");
statusStart.onclick = machine.start;
let statusStop = document.getElementById("stop");
statusStop.onclick = machine.stop;

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
}
function reduceSugar() {
    let reduceSugar = document.getElementById("reduceSugar");
}
function increaseSugar() {
    let reduceSugar = document.getElementById("reduceSugar");
}

let reduceCoffeeSugar = document.getElementById("reduceCoffeeSugar");
reduceCoffeeSugar.onclick = reduceSugar;
let increaseCoffeeSugar = document.getElementById("increaseCoffeeSugar");
increaseCoffeeSugar.onclick = increaseSugar;


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
//Выбор коффе из предложенных шаблонов
function selectCoffee() {
    let coffee = new Coffee();
    let coffeePour = document.getElementById("coffeePour");

    if (frappe.checked) {
        coffee.lemon = false;
        coffee.frappe();
        coffee.water = false;
        console.log(coffee);
        coffee.sugarAmount = document.getElementById("coffeeSugar").value;
    } else if (latte.checked) {
        coffee.ice = false;
        coffee.lemon = false;
        coffee.latte();
        coffee.water = false;
        console.log(coffee);
        coffee.sugarAmount = document.getElementById("coffeeSugar").value;
    } else if (americano.checked) {
        coffee.ice = false;
        coffee.lemon = false;
        coffee.milk = false;
        coffee.americano();
        console.log(coffee);
        coffee.sugarAmount = document.getElementById("coffeeSugar").value;
    } else if (cappuccino.checked) {
        coffee.ice = false;
        coffee.lemon = false;
        coffee.cappuccino();
        coffee.water = false;
        console.log(coffee);
        coffee.sugarAmount = document.getElementById("coffeeSugar").value;
    } else if (espresso.checked) {
        coffee.ice = false;
        coffee.lemon = false;
        coffee.milk = false;
        coffee.espresso();
        coffee.water = false;
        console.log(coffee);
        coffee.sugarAmount = document.getElementById("coffeeSugar").value;
    } else if (custom.checked) {
        coffee.sugarAmount = document.getElementById("coffeeSugar").value;
        coffee.amount = document.getElementById("coffeeAmount").value;
        coffee.milk = document.getElementById("coffeeMilk").checked;
        coffee.ice = document.getElementById("coffeeIce").checked;
        coffee.lemon = document.getElementById("coffeeLemon").checked;
        coffee.temperature = 90;
        coffee.water = false;
        console.log(coffee);
        
    }
}
let coffeePour = document.getElementById("coffeePour");
coffeePour.onclick = selectCoffee;
function selectTea(){
    let tea = new Tea;
    tea.temperature = 90;
    tea.sugarAmount = document.getElementById("teaSugar").value;
    tea.sort = document.getElementById("teaSort").value;
    tea.amount = document.getElementById("teaAmount").value;
    tea.mint = document.getElementById("teaMint").checked;
    tea.ice = document.getElementById("teaIce").checked;
    tea.lemon = document.getElementById("teaLemon").checked;
    tea.water = false;
    
    console.log(tea);
}
let teaPour = document.getElementById("teaPour");
teaPour.onclick = selectTea;




