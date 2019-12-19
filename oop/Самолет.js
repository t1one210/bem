class TY {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    moveTo() {}
}

class MIG extends TY{

    fireTo() {}
}

var ty = new TY(0,0);
ty.moveTo(); //взлет
ty.moveTo(10,10); //полет
ty.moveTo(); //посадка

var mig = new MIG(15,15);
mig.moveTo(0,0); //взлет
mig.moveTo(10,10); //полет
mig.moveTo(0,0); //посадка
mig.fireTo();