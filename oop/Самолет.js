class TY {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    moveTo() {}
    landingTo() {}
}

class MIG extends TY{

    fireTo() {}
}

var ty = new TY(0,0);
ty.landingTo(); //взлет
ty.moveTo(10,10); //полет
ty.landingTo(); //посадка

var mig = new MIG(15,15);
mig.landingTo(0,0); //взлет
mig.moveTo(10,10); //полет
mig.landingTo(0,0); //посадка
mig.fireTo();