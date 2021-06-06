var actionID = 0;
class action{
    constructor(origin, target){
        this.ID = actionID++;
        this.origin = origin;
        this.target = target;
    }

    getID(){
        return this.ID;
    }
    getOrigin(){
        return this.origin;
    }
    getTarget(){
        return this.target;
    }
}

  function randomInt(max){
      return Math.floor(Math.random()*(max));   
  }

class weaponHit extends action{
    constructor(origin, target){
        super(origin, target);
        let hitChance = randomInteger(1,origin.getHitChance());
        let dodge = randomInteger(1,target.getDodge());
        if(hitChance>=dodge){
            let damage = origin.calculateInflictedWeaponDamage();
            target.recieveDamage(damage);
            console.log(origin.name+" hitchance: "+hitChance+" / "+target.name+"dodge: "+dodge+" -> "+damage+" damage inflicted");
        }
        else{
            console.log(origin.name+" hitchance: "+hitChance+" / "+target.name+"dodge: "+dodge+" -> miss");
        }
    }


}

class spellCast extends action{
    constructor(origin, target, spell){
        super(origin, target);
        this.name = spell.name;
        this.cost = spell.cost;
        this.cooldown = spell.cooldown;
        origin.payMana(this.cost);
        origin.addCooldown(spell);

        if(spell instanceof instant){
            this.instantEffect = spell.instantEffect;
            this.standardTarget = spell.standardTarget;
            if(this.standardTarget=="opponent"){
                this.instantEffect(this.origin, this.target);
            }
            else{
                this.instantEffect(this.origin, this.origin);
            }
        }
        else if(spell instanceof enchantment){
            this.duration = spell.duration;
            this.enchantmentEffect = spell.enchantmentEffect;
            let newBuff = new buff(this.origin, this.origin, this.duration, this.enchantmentEffect);
            this.origin.addNewPeriodicEffect(newBuff);
        }
        else if(spell instanceof curse){
            this.duration = spell.duration;
            this.curseEffect = spell.curseEffect;
            let newDebuff = new debuff(this.origin, this.target, this.duration, this.curseEffect);
            this.target.addNewPeriodicEffect(newDebuff);
        }
        console.log(origin.name+" cast "+this.name);
    }

    toString(){
        return (origin+" cast "+spell.name);
    }
}

