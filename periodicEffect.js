class periodicEffect{
    constructor(origin, target, duration, effect){
        this.origin = origin;
        this.target = target;
        this.duration = duration;
        this.effect = effect;
    }

    proc(){
        this.effect(this.origin, this.target);
        this.duration--;
    }

}

class buff extends periodicEffect{
    constructor(origin, target, duration, effect){
        super(origin, target, duration, effect);
    }
}

class debuff extends periodicEffect{
    constructor(origin, target, duration, effect){
        super(origin, target, duration, effect);
    }
}