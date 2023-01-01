// polimorfism

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