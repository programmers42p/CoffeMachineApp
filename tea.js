import {Drink} from './drink'
export class Tea extends Drink{

    constructor(name,temperature,amount,sugarAmount,mint,lemon,water,sort,ice){
        super(name,amount,temperature,water);
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
    sort =["Black","White","Red","Yellow","Grey","Green"];
}