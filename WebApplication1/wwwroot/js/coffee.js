import {Drink} from './drink.js'
export class Coffee extends Drink{
    constructor(amount,temperature,milk,lemon,ice,sugarAmount,water){
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
    };
    cappuccino(){
        this.temperature = 90;
        this.amount = "Medium";
        this.milk = true;

    };
    americano(){
        this.temperature = 90;
        this.amount = "Small";
        this.water = 50;

    };
    latte(){
        this.temperature = 90;
        this.amount = "Medium";
        this.milk = true;

    };
    frappe(){
        this.temperature = 90;
        this.amount = "Large";
        this.ice = true;
        this.milk = true;

    };


}