
/**
 * Represents a soccer match between 2 teams
 */
export default class Match {

    constructor(homeTeam, guestTeam, homeTeamGoals, guestTeamGoals){
        this._homeTeam = homeTeam;
        this._guestTeam = guestTeam;

        this._homeTeamGoals = homeTeamGoals;
        this._guestTeamGoals = guestTeamGoals;
    }

    getPoints(team) {
        if (this._homeTeamGoals === this._guestTeamGoals) {
            return 1;
        } 
        
        if (team.name === this._homeTeam.name) {
            if (this._homeTeamGoals > this._guestTeamGoals) {
                return 3;
            }
        } else if (team.name === this._guestTeam.name) {
            if (this._homeTeamGoals < this._guestTeamGoals) {
                return 3;
            }
        }

        return 0;
    }

    get homeTeamPoints() {
        return this.getPoints(this._homeTeam);
    }

    get guestTeamPoints() {
        return this.getPoints(this._guestTeam);
    }

    get homeTeam() {
        return this._homeTeam;
    }

    get guestTeam() {
        return this._guestTeam;
    }

    set homeTeam(team) {
        this._homeTeam = team;
    }

    set guestTeam(team) {
        this._guestTeam = team;
    }

    get homeTeamGoals() {
        return this._homeTeamGoals;
    }

    get guestTeamGoals() {
        return this._guestTeamGoals;
    }

    set homeTeamGoals(goals) {
        this._homeTeamGoals = goals;
    }

    set guestTeamGoals(goals) {
        this._guestTeamGoals = goals;
    }

}