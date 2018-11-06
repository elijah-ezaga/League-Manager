
/**
 * Represents a soccer match between 2 teams
 */
export default class Match {

    constructor(homeTeam, guestTeam, homeTeamGoals, guestTeamGoals){
        this.homeTeam = homeTeam;
        this.guestTeam = guestTeam;

        this.homeTeamGoals = homeTeamGoals;
        this.guestTeamGoals = guestTeamGoals;
    }

    getPoints(team) {
        if (this.homeTeamGoals === this.guestTeamGoals) {
            return 1;
        } 
        
        if (team.name === this.homeTeam.name) {
            if (this.homeTeamGoals > this.guestTeamGoals) {
                return 3;
            }
        } else if (team.name === this.guestTeam.name) {
            if (this.homeTeamGoals < this.guestTeamGoals) {
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

    set homeTeamGoals(goals) {
        this.homeTeamGoals = goals;
    }

    set guestTeamGoals(goals) {
        this.guestTeamGoals = goals;
    }

}