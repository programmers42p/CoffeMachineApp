import {Drink} from './drink.js'
export class Coffee extends Drink{
    constructor(amount,temperature,milk,lemon,ice,sugarAmount,water,price){
        super(amount,temperature,water);
        this.milk = milk;
        this.lemon = lemon;
        this.ice = ice;
        this.sugarAmount = sugarAmount;

    }

    milk;
    lemon;
    ice;
    sugarAmount;

    espresso(){
        this.temperature = 90;
        this.amount = "Small";
        this.price = 100;
    };
    cappuccino(){
        this.temperature = 90;
        this.amount = "Medium";
        this.milk = true;
        this.price = 110;
    };
    americano(){
        this.temperature = 90;
        this.amount = "Small";
        this.water = 50;
        this.price = 90;
    };
    latte(){
        this.temperature = 90;
        this.amount = "Medium";
        this.milk = true;
        this.price = 130;

    };
    frappe(){
        this.temperature = 90;
        this.amount = "Large";
        this.ice = true;
        this.milk = true;
        this.price = 125;

    };


}