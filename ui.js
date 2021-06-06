function updatePlayerValues(){
    $("#playerStats").text(playerCharacter.toString());
    $("#playerInventory").text(playerCharacter.getInventory());
}

function updateOpponentValues(){
    if(currentlyInFight){
    $("#opponentStats").text(currentOpponent.toString());
    }
    else{
        $("#opponentStats").text("no encounter");
    }
}

function updateLog(){
    $("#logBox").text(playerCharacter.getLog());
}



function debugFunction(){
}

function startFightFunction(){
    let newFight = new fight(gabeNewell);
    newFight.startFight();
}


function newHeroButtonFunction(){
    let newHero = new hero($("#newHeroNameInput").val());
    switch($("#classSelect").val()){
        case "warrior":
            console.log(newHero.getClassLevel());
            newHero.addClassLevel(warrior);
            console.log(newHero.getClassLevel());
            break;
        case "ranger":
            newHero.addClassLevel(ranger);
            break;
        case "wizard":
            newHero.addClassLevel(wizard);
            break;
        case "smuggler":
            newHero.addClassLevel(smuggler);
            break;
            
    }
    loadCreateHero(newHero);
} 

function loadHeroButtonFunction(){
    loadCreateHero(gabeNewell);
}

function loadCreateHero(newHero){
    manipulatedHero = newHero;
    updateValuesCreateHero();
    
}



function updateValuesCreateHero(){
    manipulatedHero.calculateStats();
    $("#createHeroID").text(manipulatedHero.getID());
    $("#createHeroName").text(manipulatedHero.getName());
    $("#createHeroClassLevel").text(manipulatedHero.getClassLevelString());
    $("#createHeroHealthPoints").text(manipulatedHero.getCurrentHealthPoints()+" / "+manipulatedHero.getMaxHealthPoints());
    $("#createHeroManaPoints").text(manipulatedHero.getCurrentManaPoints()+" / "+manipulatedHero.getMaxManaPoints());
    $("#createHeroStrength").text(manipulatedHero.getStrength());
    $("#createHeroAgility").text(manipulatedHero.getAgility());
    $("#createHeroIntelligence").text(manipulatedHero.getIntelligence());
    $("#createHeroCunning").text(manipulatedHero.getCunning());
    $("#createHeroPerks").text(manipulatedHero.getPerks());
    $("#createHeroInventory").text(manipulatedHero.getInventory());
}

function levelUpCreateHero(){
    switch($("#classSelect").val()){
        case "warrior":
            manipulatedHero.addClassLevel(warrior);
            break;
        case "ranger":
            manipulatedHero.addClassLevel(ranger);
            break;
        case "wizard":
            manipulatedHero.addClassLevel(wizard);
            break;
        case "smuggler":
            manipulatedHero.addClassLevel(smuggler);
            break;
            
    }
    updateValuesCreateHero();
}

function updateValues(){
    updatePlayerValues();
    updateOpponentValues();
    updateLog();
}

function updateAdventureSelect(){
    for(let i = 0; i < adventureArray.length; i++){
        $('#loadAdventureSelect').append($('<option>', {
            value: i,
            text: adventureArray[i].getName()
        }));
    }
}

function loadAdventure(){
    manipulatedAdventure = adventureArray[$('#loadAdventureSelect').val()];
    $('#createExplorationTable tr').remove();
    for (let i = 0; i < manipulatedAdventure.getEncounters().length; i++){
        $('#createExplorationTable').append('<tr><td>'+manipulatedAdventure.getEncounters()[i][0].getName()+'</td><td>more data</td></tr>');
    }
}

function addEncounter(){
    $('#createExplorationTable').append('<tr><td>my data</td><td>more data</td></tr>');
}