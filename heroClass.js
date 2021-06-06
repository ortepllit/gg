class heroClass{
    constructor(name, attributeBonus){
        this.name = name;
        this.attributeBonus = attributeBonus;
        this.maxLevel = 20;
    }

    getName(){
        return this.name;
    }

    getAttributeBonus(){
        return this.attributeBonus;
    }
    
    getMaxLevel(){
        return this.maxLevel;
    }


}