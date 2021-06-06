class item{
    constructor(name, goldValue){
        this.name = name;
        this.goldValue = goldValue;
    }
    toString(){
        return this.name;
    }
}

class weapon extends item {
    constructor(name, damageRange, comboRate, critChance, critDamage) { 
        super(name);
        this.damageRange = damageRange;
        this.comboRate = comboRate;
        this.critChance = critChance;
        this.critDamage = critDamage;
     }
     getDamageRange(){
         return this.damageRange;
     }

     getCritChance(){
         return this.critChance;
     }

     getCritDamage(){
         return this.critDamage;
     }

    }



    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }