class fight{
    constructor(opponent, loot){
        currentOpponent = opponent;
        this.loot = loot;
        this.log = [];
        this.fightCounter = -1;
        currentlyInFight = true;
    }

    startRound(){
        playerCharacter.startRoundEffects();
        currentOpponent.startRoundEffects();
        this.playerInitiative = (playerCharacter.getSpeed()>=currentOpponent.getSpeed());
        updateValues();
    }

    turn(initiative, noInitiative){
        if(initiative.getAffordableOffcooldownSpells().length>0){

            let newAction = new spellCast(initiative, noInitiative, initiative.getRandomAffordableOffCooldownSpell());
        }else{
            let newAction = new weaponHit(initiative, noInitiative);
        }
        updateValues();
    }

    nextStep(){
        this.fightCounter = (this.fightCounter+1)%3;
        switch(this.fightCounter){
            case 0: this.startRound();
                    console.log("roundstart dummy");
                    break;
            case 1: if(this.playerInitiative){
                        this.turn(playerCharacter,currentOpponent);
                    }
                    else{
                        this.turn(currentOpponent,playerCharacter);
                    }
                    break;
            case 2: if(!this.playerInitiative){
                        this.turn(playerCharacter,currentOpponent);
                    }
                    else{
                        this.turn(currentOpponent,playerCharacter);
                    }
                        break;
        }
        if (playerCharacter.currentHealthPoints<=0||currentOpponent.currentHealthPoints<=0){
            if(currentOpponent.currentHealthPoints<=0){
                console.log("loot: "+this.loot);
                playerCharacter.addItem(this.loot);
                console.log("post: "+playerCharacter.getInventory());
            }
            else{
                alert("DEAD");
            }
            currentOpponent.rest();
            clearInterval(this.fightInterval);
            currentlyInFight = false;
            updateValues();
        }
    }

    startFight(){
        var para = this;
        this.fightInterval = setInterval(function(para){para.nextStep()},1000,para);
    }





}
