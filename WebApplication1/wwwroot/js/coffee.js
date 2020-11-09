import {Drink} from './drink.js'
export class Coffee extends Drink{
    constructor(name,amount,temperature,milk,lemon,ice,sugarAmount,water){
        super(name,amount,temperature,water);
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
        this.amount = 35;
    };
    cappuccino(){
        this.temperature = 90;
        this.amount = 75;
        this.milk = true;

    };
    americano(){
        this.temperature = 90;
        this.amount = 35;
        this.water = 50;

    };
    latte(){
        this.temperature = 90;
        this.amount = 75;
        this.milk = true;

    };
    frappe(){
        this.temperature = 90;
        this.amount = 100;
        this.ice = true;
        this.milk = true;

    };


}