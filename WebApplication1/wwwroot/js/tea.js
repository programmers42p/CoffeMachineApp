import {Drink} from './drink.js'
export class Tea extends Drink{

    constructor(temperature,amount,sugarAmount,mint,lemon,water,sort,ice,price){
        super(amount,temperature,water);
        this.sugarAmount = sugarAmount;
        this.mint = mint;
        this.lemon = lemon;
        this.ice = ice;
        this.sort = sort;
    }
    sugarAmount;
    mint;
    lemon;
    ice;
    sort;
}