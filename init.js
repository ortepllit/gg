var Dagger = new weapon("Dagger", [2,3],1,0.3,1.3);
var Sword = new weapon("Sword", [1,4],1,0.1,2);
var fireball = new instant("Fireball",1,1,"opponent",
    function instantEffect(origin, target){
        target.recieveDamage(15);
    });


var frostbolt = new instant("Frostbolt",5,3,"opponent",
    function instantEffect(origin, target){
        target.recieveDamage(4);
    });

var healingTouch = new instant("Healing Touch",5,2,"self",
    function instantEffect(origin, target){
        target.recieveHealing(5);
    }) ;

var healingLight = new enchantment("Healing Light",10,7,2,
    function enchantmentEffect(origin, target){
        origin.recieveHealing(1);
    });

var rot = new curse("Rot",10,7,5,
    function curseEffect(origin, target){
        target.recieveDamage(1);
        console.log("curseproc");
    });


var wizard = new heroClass("Wizard",[1,1,3,1]);
var warrior = new heroClass("Warrior",[3,1,1,1]);
var ranger = new heroClass("Ranger",[1,3,1,1]);
var smuggler = new heroClass("Smuggler",[1,1,1,3]);

var icefrog = new hero("IceFrog",Dagger);




icefrog.addClassLevel(wizard);

icefrog.addClassLevel(warrior);


icefrog.learnSpell(fireball);
var playerCharacter = icefrog;
var currentOpponent;
var currentlyInFight = false;
var currentlyInExploration = false;
var gabeNewell = new hero("Gabe Newell",Sword);
gabeNewell.learnSpell(fireball);
gabeNewell.learnSpell(healingLight);

icefrog.addItem(Dagger);
// INIT ENCOUNTER
var lion = new hero("Lion",Dagger);
var sven = new hero("Sven",Sword);
var hausmeister = new hero("Hausmeister", Dagger);

var venomancer = new hero("Lion",Dagger);
var lycan = new hero("Sven",Sword);
var dachdecker = new hero("Hausmeister", Dagger);

var keller = new exploration("Keller",
    [
        [lion,[Dagger,Sword],0.5],
        [sven,[Sword],0.4],
        [hausmeister,[Dagger],0.1]
    ]);

var dach = new exploration("Dach",
[
    [venomancer,[Dagger,Sword],0.4],
    [lycan,[Sword],0.3],
    [sven,[Sword],0.2],
    [dachdecker,[Dagger],0.1]
]);

var adventureArray = [];
adventureArray.push(keller);
adventureArray.push(dach);

var manipulatedHero;
var manipulatedAdventure;



icefrog.rest();
gabeNewell.rest();

updateAdventureSelect();
updateValues();

