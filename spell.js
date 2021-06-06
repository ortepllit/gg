class spell{
    constructor(name, cost, cooldown){
        this.name = name;
        this.cost = cost;
        this.cooldown = cooldown;
    }

    getName(){
        return this.name;
    }
    getCost(){
        return this.cost;
    }
    getCooldown(){
        return this.cooldown;
    }

    
}

class instant extends spell{
    constructor(name, cost, cooldown, standardTarget, instantEffect){
        super(name, cost, cooldown);
        this.standardTarget = standardTarget;
        this.instantEffect = instantEffect;
    }
    getInstantEffect(){
        return this.instantEffect;
    }
}

class enchantment extends spell{
    constructor(name, cost, cooldown,duration, enchantmentEffect){
        super(name, cost, cooldown);
        this.enchantmentEffect = enchantmentEffect;
        this.duration = duration;
    }
    getEnchantmentEffect(){
        return this.enchantmentEffect;
    }
    getDuration(){
        return this.duration;
    }
}

class curse extends spell{
    constructor(name, cost, cooldown, duration, curseEffect){
        super(name, cost, cooldown);
        this.curseEffect = curseEffect;
        this.duration = duration;
    }
    getCurseEffect(){
        return this.curseEffect;
    }
    getDuration(){
        return this.duration;
    }
}

