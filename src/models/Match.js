
/**
 * Represents a soccer match between 2 teams
 */
export default class Match {

    constructor(homeTeam, guestTeam, homeTeamScore, guestTeamScore){
        this.homeTeam = homeTeam;
        this.guestTeam = guestTeam;

        this.homeTeamScore = homeTeamScore;
        this.guestTeamScore = guestTeamScore;
    }

    getPoints(team) {
        if (this.homeTeamScore === this.guestTeamScore) {
            return 1;
        } 
        
        if (team.name === this.homeTeam.name) {
            if (this.homeTeamScore > this.guestTeamScore) {
                return 3;
            }
        } else if (team.name === this.guestTeam.name) {
            if (this.homeTeamScore < this.guestTeamScore) {
                return 3;
            }
        }

        return 0;
    }

    get homeTeamPoints() {
        return this.getPoints(this.homeTeam);
    }

    get guestTeamPoints() {
        return this.getPoints(this.guestTeam);
    }

}