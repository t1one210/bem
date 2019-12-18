class TY {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    moveTo(x,y);
    landingTo(x,y);
}

class MIG {
    constructor(x,y){
        this.x=x;
        this.y=y
    }
    fireTo(x,y);
}

class MIG extends TY{

    fireTo();
}

var ty = new TY();
ty.moveTo(10,10);
ty.landingTo(0,0);
var mig = new MIG();
mig.moveTo(10,10);
mig.fireTo(15,15);
mig.landingTo(0,0);