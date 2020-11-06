import {drink} from './drink'
class Coffee extends drink{
    constructor(name,strongth,amount,supplier,milkAmount,lemonAmount,iceAmount,sugarAmount){
        super(name,strongth,amount);
        this.supplier = supplier;
        this.milkAmount = milkAmount;
        this.lemonAmount = lemonAmount;
        this.iceAmount = iceAmount;
        this.sugarAmount = sugarAmount;
    }

    supplier;
    milkAmount;
    lemonAmount;
    iceAmount;
    sugarAmount;

    addMilk(){
        m

    };
    addLemon(){

    };
    addIce(){

    };
    addSugar(){

    };
    espresso(){

    };
    cappuccino(){

    };
    americano(){

    };
    latte(){

    };
    frappe(){

    };


}