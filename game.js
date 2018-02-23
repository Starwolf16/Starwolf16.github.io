/**
 * Created by Jonathan on 8/5/2017.
 */
var s = [
	//0
	"You are in a forest",
	//1
	"You are in a forest with a ",
	//2
	"You are in a field",
	//3
	"You are in a field with a ",
	//4
	"You are in a town",
	//5
	"You are in a town with a ",
	//6
	"There is a "
];
var f = [
	//0
	"field ",
	//1
	"mountain ",
	//2
	"cave ",
	//3
	"river ",
	//4
	"lake ",
	//5
	"road ",
	//6
	"chest "
];
var cr = [
	//0
	"cow ",
	//1
	"pig ",
	//2
	"chicken ",
	//3
	"rock monster ",
	//4
	"spirit ",
	//5
	"orc ",
	//6
	"orge ",
	//7
	"goblin "
];
var direc = [
	//0
	"in front of you",
	//1
	"to your right",
	//2
	'to your left'
];
var q = [
	//0
	"Which way do you want to go?",
	//1
	"What do you want to do?"
];

/*//bosses

var FaragorTheWizard = [
    //health(0)
    200,
    //attack(1)
    25,
    //defense(2)
    15,
    //crit chance (3)
    10
];
var Garathor = [
    //health(0)
    450,
    //attack(1)
    30,
    //defense(2)
    25,
    //crit chance(3)
    5
];
var TheDragon = [
    //health(0)
    600,
    //attack(1)
    45,
    //defense
    20,
    //crit chance
    15
];
*/

//player

var invent = [
	//0
	"Set of Clothes"
];
var stat = [
	//health(0)
	75,
	//attack(1)
	5,
	//defense(2)
	0,
	//crit chance(3)
	5
];

//base stats

var basecrstat = [
	//health(0)
	"0",
	//attack(1)
	"0",
	//defense(2)
	"0",
	//crit chance(3)
	"0"
];

//creatures

var cowstat = [
	//health(0)
	15,
	//attack(1)
	0,
	//defense(2)
	0,
	//crit chance(3)
	0
];
var pigstat = [
	//health(0)
	15,
	//attack(1)
	0,
	//defense(2)
	0,
	//crit chance(3)
	0
];
var chickenstat = [
	//health(0)
	10,
	//attack(1)
	0,
	//defense(2)
	0,
	//crit chance(3)
	0
];
var RMstat = [
	//health(0)
	25,
	//attack(1)
	5,
	//defense(2)
	10,
	//crit chance(3)
	2
];
var spiritstat = [
	//health(0)
	20,
	//attack(1)
	10,
	//defense(2)
	5,
	//crit chance(3)
	4
];
var orcstat = [
	//health(0)
	30,
	//attack(1)
	12,
	//defense(2)
	10,
	//crit
	5
];
var ogrestat = [
	//health(0)
	50,
	//attack(1)
	15,
	//defense(2)
	10,
	//crit(3)
	2
];
var goblinstat = [
	//health(0)
	10,
	//attack(1)
	5,
	//defense(2)
	0,
	//crit(3)
	0
];

//world items

var chest = [];
var inchest = [
	//0
	"Helmet",
	//1
	"Chest Plate",
	//2
	"Greaves",
	//3
	"Sword",
	//4
	"Bow",
	//5
	"Shield",
	//6
	"Spear"
];

//game functions

function startgame() {
	lists();
	game();
	document.getElementById('up').style.visibility = 'visible';
	document.getElementById('down').style.visibility = 'visible';
	document.getElementById('left').style.visibility = 'visible';
	document.getElementById('right').style.visibility = 'visible';
	document.getElementById('health').setAttribute("value", 75);
}

function death() {
	document.getElementById('up').style.visibility = 'invisible';
	document.getElementById('down').style.visibility = 'invisible';
	document.getElementById('left').style.visibility = 'invisible';
	document.getElementById('right').style.visibility = 'invisible';
}

function lists() {
	document.getElementById('invent').innerHTML = invent;
	//document.getElementById('HP').innerHTML = stat[0];
	document.getElementById('attack').innerHTML = stat[1];
	document.getElementById('defense').innerHTML = stat[2];
	document.getElementById('crit').innerHTML = stat[3];
}
var c;
var sur;
function game() {
	var surround;
	var ques;
	var attack = document.getElementById('attackc');
	sur = Math.floor(Math.random() * 2);
	var a = Math.floor(Math.random() * 7); //for area
	var b = Math.floor(Math.random() * 5); //for surroundings
	c = Math.floor(Math.random() * 7); //for creature
	var d = Math.floor(Math.random()* 3); //for direction
	var chest = document.getElementById('chest');
	if (a === 0 || a === 2 || a === 4) {
		surround = s[a];
		ques = q[0];
		attack.style.display = 'none';
		chest.style.display = 'none';
		crstat()
	} else if (a === 1 || a === 3 || a === 5) {
		if (sur === 0) {
			surround = s[a].concat(f[b]).concat(direc[d]);
			ques = q[0];
			attack.style.display = 'none';
			chest.style.display = 'none';
			crstat()
		} else if (sur === 1) {
			surround = s[a].concat(cr[c]).concat(direc[d]);
			ques = q[1];
			attack.style.display = 'inline';
			chest.style.display = 'none';
			creature();
		}
	} else if (a === 6) {
		surround = s[a].concat(f[6]).concat(direc[d]);
		ques = q[1];
		chest.style.display = 'inline';
		attack.style.display = 'none';
	}
	console.log('a is ' + a);
	console.log('b is ' + b);
	console.log('direc is ' + d);
	document.getElementById('area').innerHTML = surround;
	document.getElementById('ques').innerHTML = ques;
	document.getElementById('output').innerHTML = '';
	document.getElementById('croutput').innerHTML = '';
	chest = [];
	document.getElementById('chest1').innerHTML = '';
	document.getElementById('chest2').innerHTML = '';
	document.getElementById('chest3').innerHTML = '';
	document.getElementById('chest4').innerHTML = '';
	document.getElementById('chest5').innerHTML = '';
	document.getElementById('chest6').innerHTML = '';
}
function crstat() {
	document.getElementById('crhealth').innerHTML = basecrstat[0];
	document.getElementById('crattack').innerHTML = basecrstat[1];
	document.getElementById('crdefense').innerHTML = basecrstat[2];
	document.getElementById('crcrit').innerHTML = basecrstat[3];
}
function creature() {
	if (c === 0) {
		document.getElementById('crhealth').innerHTML = cowstat[0];
		document.getElementById('crattack').innerHTML = cowstat[1];
		document.getElementById('crdefense').innerHTML = cowstat[2];
		document.getElementById('crcrit').innerHTML = cowstat[3];
	} else if (c === 1) {
		document.getElementById('crhealth').innerHTML = pigstat[0];
		document.getElementById('crattack').innerHTML = pigstat[1];
		document.getElementById('crdefense').innerHTML = pigstat[2];
		document.getElementById('crcrit').innerHTML = pigstat[3];
	} else if (c === 2) {
		document.getElementById('crhealth').innerHTML = chickenstat[0];
		document.getElementById('crattack').innerHTML = chickenstat[1];
		document.getElementById('crdefense').innerHTML = chickenstat[2];
		document.getElementById('crcrit').innerHTML = chickenstat[3];
	} else if (c === 3) {
		document.getElementById('crhealth').innerHTML = RMstat[0];
		document.getElementById('crattack').innerHTML = RMstat[1];
		document.getElementById('crdefense').innerHTML = RMstat[2];
		document.getElementById('crcrit').innerHTML = RMstat[3];
	} else if (c === 4) {
		document.getElementById('crhealth').innerHTML = spiritstat[0];
		document.getElementById('crattack').innerHTML = spiritstat[1];
		document.getElementById('crdefense').innerHTML = spiritstat[2];
		document.getElementById('crcrit').innerHTML = spiritstat[3];
	} else if (c === 5) {
		document.getElementById('crhealth').innerHTML = orcstat[0];
		document.getElementById('crattack').innerHTML = orcstat[1];
		document.getElementById('crdefense').innerHTML = orcstat[2];
		document.getElementById('crcrit').innerHTML = orcstat[3];
	} else if (c === 6) {
		document.getElementById('crhealth').innerHTML = ogrestat[0];
		document.getElementById('crattack').innerHTML = ogrestat[1];
		document.getElementById('crdefense').innerHTML = ogrestat[2];
		document.getElementById('crcrit').innerHTML = ogrestat[3];
	} else if (c === 7) {
		document.getElementById('crhealth').innerHTML = goblinstat[0];
		document.getElementById('crattack').innerHTML = goblinstat[1];
		document.getElementById('crdefense').innerHTML = goblinstat[2];
		document.getElementById('crcrit').innerHTML = goblinstat[3];
	}
}

function attack() {
	var critchance = stat[3];
	var critroll = Math.floor(Math.random() * critchance);
	var roll = Math.floor(Math.random() * 20);
	if (critroll > 3) {
		if (roll >= 7) {
			if (c === 0) {
				cowstat[0] = cowstat[0] - (stat[1] + (stat[1] * .5));
				if (cowstat[0] <= 0){
					cowstat[0] = 0;
					document.getElementById('output').innerHTML = 'You killed the cow.';
					document.getElementById('attackc').style.display = 'none';
				}
				document.getElementById('crhealth').innerHTML = cowstat[0];
			} else if (c === 1) {
				pigstat[0] = pigstat[0] - (stat[1] + (stat[1] * .5));
				if (pigstat[0] <= 0){
					pigstat[0] = 0;
					document.getElementById('output').innerHTML = 'You killed the pig.';
					document.getElementById('attackc').style.display = 'none';
				}
				document.getElementById('crhealth').innerHTML = pigstat[0];
			} else if (c === 2) {
				chickenstat[0] = chickenstat[0] - (stat[1] + (stat[1] * .5));
				document.getElementById('crhealth').innerHTML = chickenstat[0];
				if (chickenstat[0] <= 0){
					chickenstat[0] = 0;
					document.getElementById('output').innerHTML = 'You killed the chicken.';
					document.getElementById('attackc').style.display = 'none';
				}
			} else if (c === 3) {
				RMstat[0] = RMstat - (stat[1] + (stat[1] * .5));
				document.getElementById('crhealth').innerHTML = RMstat[0];
				if (RMstat[0] <= 0){
					RMstat[0] = 0;
					document.getElementById('output').innerHTML = 'You killed the rock monster.';
					document.getElementById('attackc').style.display = 'none';
				}
			} else if (c === 4) {
				spiritstat[0] = spiritstat[0] - (stat[1] + (stat[1] * .5));
				document.getElementById('crhealth').innerHTML = spiritstat[0];
				if (spiritstat[0] <= 0){
					spiritstat[0] = 0;
					document.getElementById('output').innerHTML = 'You killed the spirit.';
					document.getElementById('attackc').style.display = 'none';
				}
			} else if (c === 5) {
				orcstat[0] = orcstat[0] - (stat[1] + (stat[1] * .5));
				document.getElementById('crhealth').innerHTML = orcstat[0];
				if (orcstat[0] <= 0){
					orcstat[0] = 0;
					document.getElementById('output').innerHTML = 'You killed the orc.';
					document.getElementById('attackc').style.display = 'none';
				}
			} else if (c === 6) {
				ogrestat[0] = ogrestat[0] - (stat[1] + (stat[1] * .5));
				document.getElementById('crhealth').innerHTML = ogrestat[0];
				if (ogrestat[0] <= 0){
					ogrestat[0] = 0;
					document.getElementById('output').innerHTML = 'You killed the ogre.';
					document.getElementById('attackc').style.display = 'none';
				}
			} else if (c === 7) {
				goblinstat[0] = goblinstat[0] - (stat[1] + (stat[1] * .5));
				document.getElementById('crhealth').innerHTML = goblinstat[0];
				if (goblinstat[0] <= 0){
					goblinstat[0] = 0;
					document.getElementById('output').innerHTML = 'You killed the goblin.';
					document.getElementById('attackc').style.display = 'none';
				}
			}
		} else if (roll < 7) {
			document.getElementById('output').innerHTML = 'You Missed. Try Again.'
		}
	} else if (critroll <= 3) {
		if (roll >= 7) {
			if (c === 0) {
				cowstat[0] = cowstat[0] - stat[1];
				document.getElementById('crhealth').innerHTML = cowstat[0];
				if (cowstat[0] <= 0){
					cowstat = 0;
					document.getElementById('output').innerHTML = 'You killed the cow.';
					document.getElementById('attackc').style.display = 'none';
				} else {
					document.getElementById('output').innerHTML = 'You hit it.'
				}
			} else if (c === 1) {
				pigstat[0] = pigstat[0] - stat[1];
				document.getElementById('crhealth').innerHTML = pigstat[0];
				if (pigstat[0] <= 0){
					pigstat[0] = 0;
					document.getElementById('output').innerHTML = 'You killed the pig.';
					document.getElementById('attackc').style.display = 'none';
				} else {
					document.getElementById('output').innerHTML = 'You hit it.'
				}
			} else if (c === 2) {
				chickenstat[0] = chickenstat[0] - stat[1];
				document.getElementById('crhealth').innerHTML = chickenstat[0];
				if (chickenstat[0] <= 0){
					chickenstat[0] = 0;
					document.getElementById('output').innerHTML = 'You killed the chicken.';
					document.getElementById('attackc').style.display = 'none';
				} else {
					document.getElementById('output').innerHTML = 'You hit it.'
				}
			} else if (c === 3) {
				RMstat[0] = RMstat - stat[1];
				document.getElementById('crhealth').innerHTML = RMstat[0];
				if (RMstat[0] <= 0){
					RMstat[0] = 0;
					document.getElementById('output').innerHTML = 'You killed the rock monster.';
					document.getElementById('attackc').style.display = 'none';
				} else {
					document.getElementById('output').innerHTML = 'You hit it.'
				}
			} else if (c === 4) {
				spiritstat[0] = spiritstat[0] - stat[1];
				document.getElementById('crhealth').innerHTML = spiritstat[0];
				if (spiritstat[0] <= 0){
					spiritstat[0] = 0;
					document.getElementById('output').innerHTML = 'You killed the spirit.';
					document.getElementById('attackc').style.display = 'none';
				} else {
					document.getElementById('output').innerHTML = 'You hit it.'
				}
			} else if (c === 5) {
				orcstat[0] = orcstat[0] - stat[1];
				document.getElementById('crhealth').innerHTML = orcstat[0];
				if (orcstat[0] <= 0){
					orcstat[0] = 0;
					document.getElementById('output').innerHTML = 'You killed the orc.';
					document.getElementById('attackc').style.display = 'none';
				} else {
					document.getElementById('output').innerHTML = 'You hit it.'
				}
			} else if (c === 6) {
				ogrestat[0] = ogrestat[0] - stat[1];
				document.getElementById('crhealth').innerHTML = ogrestat[0];
				if (ogrestat[0] <= 0){
					ogrestat[0] = 0;
					document.getElementById('output').innerHTML = 'You killed the ogre.';
					document.getElementById('attackc').style.display = 'none';
				} else {
					document.getElementById('output').innerHTML = 'You hit it.'
				}
			} else if (c === 7) {
				goblinstat[0] = goblinstat[0] - stat[1];
				document.getElementById('crhealth').innerHTML = goblinstat[0];
				if (goblinstat[0] <= 0){
					goblinstat[0] = 0;
					document.getElementById('output').innerHTML = 'You killed the goblin.';
					document.getElementById('attackc').style.display = 'none';
				} else {
					document.getElementById('output').innerHTML = 'You hit it.'
				}
			}
		} else if (roll < 7) {
			document.getElementById('output').innerHTML = 'You Missed. Try Again.'
		}
	}
	crattack();
}

function crattack() {
	var critchance;
	if (c === 3){
		critchance = RMstat[3];
	} else if (c === 4){
		critchance = spiritstat[3];
	} else if (c === 5) {
		critchance = orcstat[3];
	} else if (c === 6) {
		critchance = ogrestat[3];
	} else if (c === 7){
		critchance = goblinstat[3];
	}
	var critroll = Math.floor(Math.random() * critchance);
	var roll = Math.floor(Math.random() * 20);
	if (c === 3){
		if (critroll > 1) {
			if (roll >= 7) {
				stat[0] = stat[0] - (RMstat[1] + (RMstat[1] * .5));
				document.getElementById('croutput').innerHTML = "The rock monster slammed into you for a critical hit.";
				document.getElementById('health').setAttribute("value", stat[0]);
			} else if (roll < 7) {
				document.getElementById('croutput').innerHTML = "The creature missed.";
			}
		} else if (critroll < 1){
			if (roll >= 7) {
				stat[0] = stat[0] - RMstat[1];
				document.getElementById('croutput').innerHTML = "You were hit by the rock monster.";
				document.getElementById('health').setAttribute("value", stat[0]);
			} else if (roll < 7) {
				document.getElementById('croutput').innerHTML = "The creature missed";
			}
		}
	} else if (c === 4) {
		if (critroll > 2) {
			if (roll >= 7) {
				stat[0] = stat[0] - (spiritstat[1] + (spiritstat[1] * .5));
				document.getElementById('croutput').innerHTML = "The spirit hit you with a critical hit.";
				document.getElementById('health').setAttribute("value", stat[0]);
			} else if ( roll < 7){
				document.getElementById('croutput').innerHTML = "The creature missed.";
			}
		} else if (critroll < 2) {
			if (roll >= 7) {
				stat[0] = stat[0] - spiritstat[1];
				document.getElementById('croutput').innerHTML = "You were hit by the spirit.";
				document.getElementById('health').setAttribute("value", stat[0]);
			} else if (roll < 7) {
				document.getElementById('croutput').innerHTML = "The creature missed.";
			}
		}
	} else if (c === 5) {
		if (critroll > 3) {
			if (roll >= 7) {
				stat[0] = stat[0] - (orcstat[1] + (orcstat[1] * .5));
				document.getElementById('croutput').innerHTML = "The orc critically slashed you.";
				document.getElementById('health').setAttribute("value", stat[0]);
			} else if (roll < 7) {
				document.getElementById('croutput').innerHTML = "The creature missed.";
			}
		} else if (critroll < 3) {
			if (roll >= 7) {
				stat[0] = stat[0] - orcstat[1];
				document.getElementById('croutput').innerHTML = "The orc slashed you.";
				document.getElementById('health').setAttribute("value", stat[0]);
			} else if (roll < 7) {
				document.getElementById('croutput').innerHTML = "The creature missed.";
			}
		}
	} else if (c === 6) {
		if (critroll > 1) {
			if (roll >= 7) {
				stat[0] = stat[0] - (ogrestat[1] + (ogrestat[1] * .5));
				document.getElementById('croutput').innerHTML = "The orge hit you in a critical area.";
				document.getElementById('health').setAttribute("value", stat[0]);
			} else if (roll < 7) {
				document.getElementById('croutput').innerHTML = "The creature missed.";
			}
		} else if (critroll < 1) {
			if (roll >= 7) {
				stat[0] = stat[0] - ogrestat[1];
				document.getElementById('croutput').innerHTML = "The ogre hit you.";
				document.getElementById('health').setAttribute("value", stat[0]);
			} else if (roll < 7) {
				document.getElementById('croutput').innerHTML = "The creature missed.";
			}
		}
	} else if (c === 7) {
		if (roll >= 7) {
			stat[0] = stat[0] - (goblinstat[1] + (goblinstat[1] * .5));
			document.getElementById('croutput').innerHTML = "The goblin hit you with a stone in a critical area.";
			document.getElementById('health').setAttribute("value", stat[0]);
		} else if (roll < 7) {
			document.getElementById('croutput').innerHTML = "The creature missed";
		}
		if (roll >= 7) {
			stat[0] = stat[0] - goblinstat[1];
			document.getElementById('croutput').innerHTML = "The goblin hit you with a stone.";
			document.getElementById('health').setAttribute("value", stat[0]);
		} else if (roll < 7) {
			document.getElementById('croutput').innerHTML = "The creature missed.";
		}
	}
	if (stat[0] <= 0) {
		stat[0] = 0;
		document.getElementById('output').innerHTML = "You are dead. Better luck next time.";
		death();
	}
	var hp = document.getElementById('health').getAttribute("value");
	document.getElementById('health').setAttribute("title", hp);
	/*if (hp > 37.5) {
       document.getElementById('health').style.backgroundImage =
   }*/
}
var number;
var type;
function fchest() {
	chest = [];
	number = Math.floor(Math.random() * 6) - 1;
	for (i = 0; i <= number; i = i + 1) {
		type = Math.floor(Math.random() * 7);
		if (type === 0) {
			chest.push(inchest[0]);
			itemstat();
		} else if (type === 1) {
			chest.push(inchest[1]);
		} else if (type === 2) {
			chest.push(inchest[2]);
		} else if (type === 3) {
			chest.push(inchest[3]);
		} else if (type === 4) {
			chest.push(inchest[4]);
		} else if (type === 5) {
			chest.push(inchest[5]);
		} else if (type === 6) {
			chest.push(inchest[6]);
		}
	}
	if (number === 1){
		document.getElementById('chest1').innerHTML = chest[0];
	} else if (number === 2) {
		document.getElementById('chest1').innerHTML = chest[0];
		document.getElementById('chest2').innerHTML = chest[1];
	} else if (number === 3) {
		document.getElementById('chest1').innerHTML = chest[0];
		document.getElementById('chest2').innerHTML = chest[1];
		document.getElementById('chest3').innerHTML = chest[2];
	} else if (number === 4) {
		document.getElementById('chest1').innerHTML = chest[0];
		document.getElementById('chest2').innerHTML = chest[1];
		document.getElementById('chest3').innerHTML = chest[2];
		document.getElementById('chest4').innerHTML = chest[3];
	} else if (number === 5) {
		document.getElementById('chest1').innerHTML = chest[0];
		document.getElementById('chest2').innerHTML = chest[1];
		document.getElementById('chest3').innerHTML = chest[2];
		document.getElementById('chest4').innerHTML = chest[3];
		document.getElementById('chest5').innerHTML = chest[4];
	} else if (number === 6) {
		document.getElementById('chest1').innerHTML = chest[0];
		document.getElementById('chest2').innerHTML = chest[1];
		document.getElementById('chest3').innerHTML = chest[2];
		document.getElementById('chest4').innerHTML = chest[3];
		document.getElementById('chest5').innerHTML = chest[4];
		document.getElementById('chest5').innerHTML = chest[5];
	}
}
/*
function itemstat() {
    if (type === 0){
        document.getElementById('item1').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 1){
        document.getElementById('item1').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 2){
        document.getElementById('item1').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 3){
        document.getElementById('item1').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 4){
        document.getElementById('item1').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 5){
        document.getElementById('item1').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 6){
        document.getElementById('item1').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    }
    if (type === 0){
        document.getElementById('item2').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 1){
        document.getElementById('item2').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 2){
        document.getElementById('item2').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 3){
        document.getElementById('item2').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 4){
        document.getElementById('item2').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 5){
        document.getElementById('item2').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 6){
        document.getElementById('item2').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    }
    if (type === 0){
        document.getElementById('item3').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 1){
        document.getElementById('item3').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 2){
        document.getElementById('item3').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 3){
        document.getElementById('item3').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 4){
        document.getElementById('item3').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 5){
        document.getElementById('item3').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 6){
        document.getElementById('item3').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    }
    if (type === 0){
        document.getElementById('item4').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 1){
        document.getElementById('item4').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 2){
        document.getElementById('item4').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 3){
        document.getElementById('item4').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 4){
        document.getElementById('item4').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 5){
        document.getElementById('item4').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    } else if (type === 6){
        document.getElementById('item4').innerHTML = "<ul>" +
            "<li>HP: +5</li>" +
            "<li>Attack: +0</li>" +
            "<li>Defense: +3</li>" +
            "<li>Crit Chance: +0</li>" +
            "</ul>";
    }
}*/
var item;
function itemstat() {
	for (i=0; i<=number; i++) {
		item = i.toString();
		console.log(item);
		if (type === 0){
			document.getElementById(item).innerHTML =
				"<ul>" +
				"<li>Hp: +5</li>" +
				"<li>Attack: +0</li>" +
				"<li>Defense: +3</li>" +
				"<li>Crit Chance: +0</li>" +
				"</ul>";
		} else if (type === 1) {
			document.getElementById(item).innerHTML =
				"<ul>" +
				"<li>Hp: +10</li>" +
				"<li>Attack: +0</li>" +
				"<li>Defense: +6</li>" +
				"<li>Crit Chance: +1</li>" +
				"</ul>";
		} else if (type === 2) {
			document.getElementById(item).innerHTML =
				"<ul>" +
				"<li>Hp: +7</li>" +
				"<li>Attack: +0</li>" +
				"<li>Defense: +4</li>" +
				"<li>Crit Chance: +0</li>" +
				"</ul>";
		} else if (type === 3) {
			document.getElementById(item).innerHTML =
				"<ul>" +
				"<li>Hp: +0</li>" +
				"<li>Attack: +8</li>" +
				"<li>Defense: +0</li>" +
				"<li>Crit Chance: +3</li>" +
				"</ul>";
		} else if (type === 4) {
			document.getElementById(item).innerHTML =
				"<ul>" +
				"<li>Hp: +0</li>" +
				"<li>Attack: +5</li>" +
				"<li>Defense: +0</li>" +
				"<li>Crit Chance: +1</li>" +
				"</ul>";
		} else if (type === 5) {
			document.getElementById(item).innerHTML =
				"<ul>" +
				"<li>Hp: +5</li>" +
				"<li>Attack: +0</li>" +
				"<li>Defense: +8</li>" +
				"<li>Crit Chance: +0</li>" +
				"</ul>";
		} else if (type === 6) {
			document.getElementById(item).innerHTML =
				"<ul>" +
				"<li>Hp: +0</li>" +
				"<li>Attack: +10</li>" +
				"<li>Defense: +0</li>" +
				"<li>Crit Chance: +2</li>" +
				"</ul>";
		}
	}
}
