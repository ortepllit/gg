class adventure{
    constructor(name, encounters){
        this.name = name;
        this.encounters = encounters;
    }

    getName(){
        return this.name;
    }

    getEncounters(){
        return this.encounters;
    }
}

class exploration extends adventure{
    constructor(name, encounters){
        super(name, encounters);
    }

    enter(){
        if(currentlyInExploration){
            console.log("CURRENTLY IN EXPLORAION BUG");
        }
        else{
            let para = this;
            this.explorationInterval = setInterval(function(para){
                console.log("check for infight");
                if(!currentlyInFight){
                para.startNewEncounter()
                }
                },1000,para);
        }
    }

    startNewEncounter(){
        let randomEncounterIndex = Math.floor(Math.random()*this.encounters.length);
        let randomLootIndex = Math.floor(Math.random()*(this.encounters[randomEncounterIndex][1].length)); 
        let newFight = new fight(this.encounters[randomEncounterIndex][0], this.encounters[randomEncounterIndex][1][randomLootIndex]);
        newFight.startFight();
    }

    
}