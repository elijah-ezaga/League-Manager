
/**
 * Represents a team involved in some league
 */
export default class Team {

    constructor(name) {
        this._name = name;

        /**
         * Number of points from matches
         */
        this.leaguePoints = 0;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    updateLeaguePoints(points) {
        this.leaguePoints += points;
    }
}