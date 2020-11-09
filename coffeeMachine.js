import {Coffee} from './coffee'
import {Tea} from './tea'
class CoffeeMachine {
    start () {
        let cupOfCoffee = new Coffee
        let cupOfTea = new Tea

    }
    stop(){


    }
    pour(){

    }

}

/*function setCustomCoffee(){
    let coffeeAmount = getElementById("coffeeAmount");
    coffeeAmount.setAttribute(disabled,'disabled');
}*/

let coffeeAmount = document.getElementById("coffeeAmount");
coffeeAmount.setAttribute('disabled','disabled');