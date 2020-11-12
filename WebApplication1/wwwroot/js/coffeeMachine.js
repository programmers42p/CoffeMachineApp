import {Coffee} from './coffee.js'
import { Tea } from './tea.js'
class CoffeeMachine {
    start() {
        let teaButton = document.getElementById("teaButton");
        teaButton.removeAttribute("disabled");

        let coffeeButton = document.getElementById("coffeeButton");
        coffeeButton.removeAttribute("disabled");

        let anim = document.getElementById("anim");
        anim.setAttribute("hidden", "hidden");
        
    }
    stop(){
        let teaButton = document.getElementById("teaButton");
        teaButton.setAttribute("disabled", "disabled");

        let coffeeButton = document.getElementById("coffeeButton");
        coffeeButton.setAttribute("disabled", "disabled");

        let anim = document.getElementById("anim");
        anim.setAttribute("hidden","hidden");

    }
    pour() {
        let anim = document.getElementById("anim");
        anim.setAttribute("hidden", "hidden");
    }

}

let machine = new CoffeeMachine();
let statusStart = document.getElementById("start");
statusStart.onclick = machine.start;
let statusStop = document.getElementById("stop");
statusStop.onclick = machine.stop;
let cupOfTea = document.getElementById("teaButton");
cupOfTea.onclick = machine.pour();
let cupOfCoffee = document.getElementById("coffeeButton");
cupOfCoffee.onclick = machine.pour();

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

    if (frappe.checked) {
        coffee.sugarAmount = document.getElementById("coffeeSugar").value;
        coffee.lemon = false;
        coffee.frappe();
        coffee.water = false;
        let anim = document.getElementById("anim");
        anim.removeAttribute("hidden");
        anim.title = `Temperature: ${coffee.temperature}, Sugar amount: ${coffee.sugarAmount}, Amount: ${coffee.amount}${coffee.milk == false ? '' : ', With milk'}${coffee.ice == false ? '' : ', With ice'}${coffee.lemon == false ? '' : ', With lemon'}`;
        console.log(coffee);
    } else if (latte.checked) {
        coffee.sugarAmount = document.getElementById("coffeeSugar").value;
        coffee.ice = false;
        coffee.lemon = false;
        coffee.latte();
        coffee.water = false;
        let anim = document.getElementById("anim");
        anim.removeAttribute("hidden");
        anim.title = `Temperature: ${coffee.temperature}, Sugar amount: ${coffee.sugarAmount}, Amount: ${coffee.amount}${coffee.milk == false ? '' : ', With milk'}${coffee.ice == false ? '' : ', With ice'}${coffee.lemon == false ? '' : ', With lemon'}`;
        console.log(coffee);
    } else if (americano.checked) {
        coffee.sugarAmount = document.getElementById("coffeeSugar").value;
        coffee.ice = false;
        coffee.lemon = false;
        coffee.milk = false;
        coffee.americano();
        let anim = document.getElementById("anim");
        anim.removeAttribute("hidden");
        anim.title = `Temperature: ${coffee.temperature}, Sugar amount: ${coffee.sugarAmount}, Amount: ${coffee.amount}${coffee.milk == false ? '' : ', With milk'}${coffee.ice == false ? '' : ', With ice'}${coffee.lemon == false ? '' : ', With lemon'}, Water:${coffee.water}`;
        console.log(coffee);
    } else if (cappuccino.checked) {
        coffee.sugarAmount = document.getElementById("coffeeSugar").value;
        coffee.ice = false;
        coffee.lemon = false;
        coffee.cappuccino();
        coffee.water = false;
        let anim = document.getElementById("anim");
        anim.removeAttribute("hidden");
        anim.title = `Temperature: ${coffee.temperature}, Sugar amount: ${coffee.sugarAmount}, Amount: ${coffee.amount}${coffee.milk == false ? '' : ', With milk'}${coffee.ice == false ? '' : ', With ice'}${coffee.lemon == false ? '' : ', With lemon'}`;
        console.log(coffee);
    } else if (espresso.checked) {
        coffee.sugarAmount = document.getElementById("coffeeSugar").value;
        coffee.ice = false;
        coffee.lemon = false;
        coffee.milk = false;
        coffee.espresso();
        coffee.water = false;
        let anim = document.getElementById("anim");
        anim.removeAttribute("hidden");
        anim.title = `Temperature: ${coffee.temperature}, Sugar amount: ${coffee.sugarAmount}, Amount: ${coffee.amount}${coffee.milk == false ? '' : ', With milk'}${coffee.ice == false ? '' : ', With ice'}${coffee.lemon == false ? '' : ', With lemon'}`;
        console.log(coffee);
    } else if (custom.checked) {
        coffee.sugarAmount = document.getElementById("coffeeSugar").value;
        coffee.amount = document.getElementById("coffeeAmount").value;
        coffee.milk = document.getElementById("coffeeMilk").checked;
        coffee.ice = document.getElementById("coffeeIce").checked;
        coffee.lemon = document.getElementById("coffeeLemon").checked;
        coffee.temperature = 90;
        coffee.water = false;
        let anim = document.getElementById("anim");
        anim.removeAttribute("hidden");
        anim.title = `Temperature: ${coffee.temperature}, Sugar amount: ${coffee.sugarAmount}, Amount: ${coffee.amount}${coffee.milk == false ? '' : ', With milk'}${coffee.ice == false ? '' : ', With ice'}${coffee.lemon == false ? '' : ', With lemon'}`;
        console.log(coffee);
        
    }
}
let coffeePour = document.getElementById("coffeePour");
coffeePour.onclick = selectCoffee;
function selectTea() {
    let tea = new Tea;
    tea.temperature = 90;
    tea.sugarAmount = document.getElementById("teaSugar").value;
    tea.sort = document.getElementById("teaSort").value;
    tea.amount = document.getElementById("teaAmount").value;
    tea.mint = document.getElementById("teaMint").checked;
    tea.ice = document.getElementById("teaIce").checked;
    tea.lemon = document.getElementById("teaLemon").checked;
    tea.water = false;
    let anim = document.getElementById("anim");
    anim.removeAttribute("hidden");
    anim.title = `Temperature: ${tea.temperature}, Sugar amount: ${tea.sugarAmount}, Sort: ${tea.sort}, Amount: ${tea.amount}${tea.mint == false ? '' : ', With mint'}${tea.ice == false ? '':', With ice'}${tea.lemon == false ? '': ', With lemon'}`;
    console.log(tea);
}
let teaPour = document.getElementById("teaPour");
teaPour.onclick = selectTea;
//Добавление сахара в чай
function reduceSugar() {
    
    let sugar = document.getElementById("teaSugar");
    if (sugar.value != 0) {
        sugar.value = +sugar.value - 1;
    }
    
}
let reduceSugarTeaButton = document.getElementById("reduceSugar");
reduceSugarTeaButton.onclick = reduceSugar;
function increaseSugar() {

    let sugar = document.getElementById("teaSugar");
    if (sugar.value != 4) {
        sugar.value = +sugar.value + 1;
    }

}
let increaseSugarTeaButton = document.getElementById("increaseSugar");
increaseSugarTeaButton.onclick = increaseSugar;
//Добавление сахара в коффе
function reduceSugarCoffee() {

    let sugar = document.getElementById("coffeeSugar");
    if (sugar.value != 0) {
        sugar.value = +sugar.value - 1;
    }

}
let reduceSugarCoffeeButton = document.getElementById("reduceCoffeeSugar");
reduceSugarCoffeeButton.onclick = reduceSugarCoffee;
function increaseSugarCoffee() {

    let sugar = document.getElementById("coffeeSugar");
    if (sugar.value != 4) {
        sugar.value = +sugar.value + 1;
    }

}
let increaseSugarCoffeeButton = document.getElementById("increaseCoffeeSugar");
increaseSugarCoffeeButton.onclick = increaseSugarCoffee;





