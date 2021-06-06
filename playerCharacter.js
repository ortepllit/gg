class playerCharacterClass{

    constructor(name, hero){
        this.name = name;
        this.character = hero;
        this.inFight = false;
    }
    
    isInFight(){
        this.inFight = true;
    }

    isNotInFight(){
        this.inFight = false;
    }

    getInFight(){
        return this.inFight;
    }

    
}

