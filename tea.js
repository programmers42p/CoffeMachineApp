import {drink} from './drink'
class Tea extends drink{

    constructor(name,strongth,amount,supplier,sugarAmount,mintAmount,lemonAmount){
        super(name,strongth,amount);
        this.supplier = supplier;
        this.sugarAmount = sugarAmount;
        this.mintAmount = mintAmount;
        this.lemonAmount = lemonAmount;
    }
    supplier;
    sugarAmount;
    mintAmount;
    lemonAmount;


    addLemon(){

    };
    addIce(){

    };
    addSugar(){

    };
    GreenTea(){

    };
    YellowTea(){

    };
    BlackTea(){

    };
    RedTea(){

    };
    WhiteTea(){

    };
    AddMint(){

    };

}