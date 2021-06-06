var heroID = 0;
class hero{
    constructor(name,weapon){
        this.ID = heroID++;
        this.name = name;
        this.actions = [];
        this.strength = 10;
        this.agility = 10;
        this.intelligence = 10;
        this.cunning = 10;
        this.calculateMaxHealthPoints();
        this.currentHealthPoints = this.maxHealthPoints;
        this.calculateMaxManaPoints();
        this.currentManaPoints = this.maxManaPoints;
        this.calculateSpeed();
        this.calculateDodge();      
        this.weapon = weapon;
        this.log = [];
        this.learnedSpells = [];
        this.periodicEffects = [];
        this.classLevel = [];
        this.inventory = [];
        this.perks = [];
    }

    getID(){
        return this.ID;
    }

    getName(){
        return this.name;
    }

    getPerks(){
        return this.perks;
    }

    addItem(newItem){
        this.inventory.push(newItem);
    }

    getInventory(){
        var returnString = "";
        for (let i = 0; i<this.inventory.length; i++){
            returnString += this.inventory[i].toString()+"\n";
        }
        return returnString;
    }

    



    calculateAttributes(){
        let currentBonus = [10,10,10,10];
        let classBonus = this.getClassAttributeBonus();
        currentBonus[0] = currentBonus[0]+classBonus[0];  
        currentBonus[1] = currentBonus[1]+classBonus[1];    
        currentBonus[2] = currentBonus[2]+classBonus[2];   
        currentBonus[3] = currentBonus[3]+classBonus[3];
        this.strength = currentBonus[0];
        this.agility = currentBonus[1];
        this.intelligence = currentBonus[2];
        this.cunning = currentBonus[3];
        
    }

    getClassAttributeBonus(){
        let currentBonus = [0,0,0,0];
        for(let i = 0; i<this.getClassLevel().length;i++){
            let attributeBonus = this.getClassLevel()[i][0].getAttributeBonus();
            for(let j = 0; j<this.getClassLevel()[i][1];j++){
                currentBonus[0] = currentBonus[0]+attributeBonus[0];  
                currentBonus[1] = currentBonus[1]+attributeBonus[1];    
                currentBonus[2] = currentBonus[2]+attributeBonus[2];   
                currentBonus[3] = currentBonus[3]+attributeBonus[3];
            }
        }
        return currentBonus;
    }

    addClassLevel(newClass){
        for (let i = 0; i<this.classLevel.length; i++){
            if(this.classLevel[i][0]==newClass){
                this.classLevel[i][1]+=1;
                return;
            }
        }
        this.classLevel.push([newClass,1]);
    }

    getClassLevel(){
        return this.classLevel;
    }

    getClassLevelString(){
        let returnString = "";
        for (let i = 0; i<this.classLevel.length; i++){
            returnString += this.classLevel[i][0].getName() + " / " + this.classLevel[i][1] + "\n";
        }
        return returnString;
    }


    addNewPeriodicEffect(effect){
        this.periodicEffects.push(effect);
    }

    getPeriodicEffects(){
        return this.periodicEffects;
    }

    getWeapon(){
        return this.weapon;
    }

    addToLog(input){
        this.log.push(input);
    }

    getLog(){
        let returnString = "";
        
        for (let i=0; i<this.log.length; i++){

            returnString+=this.log[i].toString()+"\n";
        }
        return returnString;
    }
    
    getStrength(){
        return this.strength;
    }

    getAgility(){
        return this.agility;
    }

    getIntelligence(){
        return this.intelligence;
    }

    getCunning(){
        return this.cunning;
    }

    getCurrentHealthPoints(){
        return this.currentHealthPoints;
    }
    getMaxHealthPoints(){
        return this.maxHealthPoints;
    }
    getCurrentManaPoints(){
        return this.currentManaPoints;
    }
    getMaxManaPoints(){
        return this.maxManaPoints;
    }
    
    calculateMaxHealthPoints(){
    this.maxHealthPoints = 10+this.strength;    
    }
    calculateMaxManaPoints(){
        this.maxManaPoints = 10+this.intelligence;
    }

    
    recieveHealing(value){
        if(this.currentHealthPoints+value>this.maxHealthPoints){
            this.currentHealthPoints=this.maxHealthPoints;
        }
        else{
            this.currentHealthPoints = this.currentHealthPoints+value;
        }
    }
    recieveDamage(value){
       this.currentHealthPoints = this.currentHealthPoints-value;
       if (this.currentHealthPoints>this.maxHealthPoints){
           this.currentHealthPoints = this.maxHealthPoints;
       }
    }

    calculateSpeed(){
        this.speed = 10+this.agility;
    }

    calculateDodge(){
        this.dodge = 10+this.agility;
    }

    calculateHitChance(){
        this.hitChance = 10+this.agility+this.strength;
    }

    getHitChance(){
        this.calculateHitChance();
        return this.hitChance;
    }

    getSpeed(){
        this.calculateSpeed();
        return this.speed;
    }

    getDodge(){
        this.calculateDodge();
        return this.dodge;
    }

    getWeapon(){
        return this.weapon;
    }

    getCritChance(){
        return this.getWeapon().getCritChance();
    }

    checkCriticalHit(){
        if(Math.random()<this.getCritChance()){
            console.log("CRIT");
            return this.calculateCritDamage();
        }
        else{
            return 1;
        }
    }
    calculateCritDamage(){
        return this.getWeapon().getCritDamage()+(this.cunning/100);
    }

    calculateInflictedWeaponDamage(){
        return Math.ceil(this.checkCriticalHit()*(randomInteger(this.getWeapon().getDamageRange()[0],this.getWeapon().getDamageRange()[1])));
    }

    payMana(value){
        if(this.currentManaPoints>=value){
            this.currentManaPoints = this.currentManaPoints-value;
        }
        else{
            console.log("MANA BUG");
        }
    }

    recieveMana(value){
        if(this.currentManaPoints+value>this.maxManaPoints){
            this.currentManaPoints=this.maxManaPoints;
        }
        else{
            this.currentManaPoints = this.currentManaPoints+value;
        }
    }



    learnSpell(newSpell){
        this.learnedSpells.push([newSpell,0]);
    }

    addCooldown(newSpell){
        for(var i = 0; i<this.learnedSpells.length; i++){
            if(this.learnedSpells[i][0].name==newSpell.name){
                this.learnedSpells[i][1] = this.learnedSpells[i][0].cooldown;
            }
        }
    }

    reduceCooldowns(value){
        for(var i = 0; i<this.learnedSpells.length; i++){
            if(this.learnedSpells[i][1]>0){
                this.learnedSpells[i][1] = this.learnedSpells[i][1] - value;
            }
        }
    }

    checkCooldown(spell){
        for(let entry in this.learnedSpells){
            if(entry[0]==spell){
                return entry[1];
            }
        }
        return -1;
    }

    getOffCooldownSpells(){
        return this.learnedSpells.filter(entry => entry[1]==0);
    }

    getAffordableOffcooldownSpells(){
        return this.getOffCooldownSpells().filter(entry => entry[0].getCost()<=this.currentManaPoints);
    }

    getRandomAffordableOffCooldownSpell(){
        var spellArray = this.getAffordableOffcooldownSpells();
        var randomIndex = randomInt(spellArray.length);
        return spellArray[randomIndex][0];
    }

    procPeriodicEffects(){
        let effects = this.getPeriodicEffects();
        for(let i = 0; i<effects.length; i++){
            effects[i].proc();
        }
        this.clearPeriodicEffects();
    }

    clearPeriodicEffects(){
        let effects = this.getPeriodicEffects()
        this.periodicEffects = effects.filter(effect => effect.duration>0);
    }

    calculateHealthPointRegeneration(){
        return Math.floor(this.strength/10);
    }

    calculateManaPointRegeneration(){
        return Math.floor(this.intelligence/10);
    }

    startRoundRegenerationEffects(){
        this.recieveHealing(this.calculateHealthPointRegeneration());
        this.recieveMana(this.calculateManaPointRegeneration());
    }

    

    startRoundEffects(){
        this.procPeriodicEffects();
        this.startRoundRegenerationEffects();
        this.reduceCooldowns(1);
        this.calculateStats();
    }

    calculateStats(){
        this.calculateAttributes();
        this.calculateMaxHealthPoints();
        this.calculateMaxManaPoints();
    }

    rest(){
    this.periodicEffects = [];
    this.calculateStats();
    this.fullHeal();
    this.fullMana();
    }

    fullHeal(){
        this.currentHealthPoints = this.maxHealthPoints;
    }

    fullMana(){
        this.currentManaPoints = this.maxManaPoints;
    }


    fight(opponent){
        currentOpponent = opponent;
        var fightCounter = -1;
        var self = this;
        var playerInitiative = true;
        this.inFight = true;
        currentlyInFight = true;
        
       function startRound(){
           playerCharacter.startRoundEffects();
           currentOpponent.startRoundEffects();
           playerInitiative = (playerCharacter.getSpeed()>=currentOpponent.getSpeed());
           updateValues();
           console.log("start round");
           
        }

        function turn(initiative, noInitiative){
            console.log("initiative: "+initiative.name);
            if(initiative.getAffordableOffcooldownSpells().length>0){

                let newAction = new spellCast(initiative, noInitiative, initiative.getRandomAffordableOffCooldownSpell());
            }else{
                let newAction = new weaponHit(initiative, noInitiative);
            }
            updateValues();
        }


        function nextStep(player,opponent){
            fightCounter = (fightCounter+1)%3
           switch(fightCounter){
               case 0: startRound(player,opponent);
                       break;
               case 1: if(playerInitiative){
                           turn(player,opponent);
                       }
                       else{
                           turn(opponent,player);
                       }
                       break;
               case 2: if(!playerInitiative){
                           turn(player,opponent);
                       }
                       else{
                           turn(opponent,player);
                       }
                           break;
           }
           if (player.currentHealthPoints<=0||opponent.currentHealthPoints<=0){
               clearInterval(fightInterval);
               currentlyInFight = false;
               if(opponent.currentHealthPoints<=0){
                   return true;
               }
               else{
                   return false;
               }
           }

            

        }
       

       var fightInterval = setInterval(function(){ nextStep(self,opponent) }, 1000);

    }



    toString(){
        this.calculateStats();
        let returnString = "";
        returnString += this.ID+"\n";
        returnString += this.name+"\n";
        returnString += this.currentHealthPoints+" / "+this.maxHealthPoints+"\n";
        returnString += this.currentManaPoints+" / "+this.maxManaPoints+"\n";
        returnString += this.strength+"\n";
        returnString += this.agility+"\n";
        returnString += this.intelligence+"\n";
        returnString += this.cunning+"\n";
        returnString += this.getWeapon().toString();
        
        return returnString;
    }
}