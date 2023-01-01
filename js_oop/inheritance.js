// inheritance

class Player {
	constructor(sport, league, team, position) {
		this.sport = sport;
		this.league = league;
		this.team = team;
		this.position =position;
	}
	cyYoung() {
		if (this.sport === 'baseball' && this.league === 'mlb' && this.position === 'pitcher') {
			document.write("This player can win the Cy Young award.");
		} else {
			document.write("This player can't win the Cy Young award.");
		}
	}
}

const player1 = new Player("baseball", "mlb", "ny yankees", "pitcher"); 
const player2 = new Player("basketball", "nba", "la lakers", "pivot"); 

player1.cyYoung();
player2.cyYoung();



class player extends Player {
	constructor(sport, league, team, position, bats, throws) {
	super(sport, league, team, position);
	this.bats = bats;
	this.throws = throws;
	}
	hits() {
		if (this.bats === "right" || this.bats === "left") {
			document.write(`This player can hit on the ${this.bats}.`)
		} else {
			document.write("This player can't hit.")
		}
	}
}

const hitter = new player("baseball", "mlb", "ny yankees", "pitcher", "right", "right");

hitter.hits();

