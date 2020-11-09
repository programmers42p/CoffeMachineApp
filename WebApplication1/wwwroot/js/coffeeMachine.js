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
    let coffeAmount = document.getElementById("coffeeAmount")
    coffeAmount.setAttribute("disabled", "true")

    let checkCoffee = document.getElementById("checkCoffee")
    checkCoffee.setAttribute("disabled", "true")

}
function specificCoffee(){
    let coffeAmount = document.getElementById("coffeeAmount")
    coffeAmount.setAttribute("disabled", "false")

    let checkCoffee = document.getElementById("checkCoffee")
    checkCoffee.setAttribute("disabled", "false")
}
