
/**
 * Represents a team involved in some league
 */
export default class Team {

    constructor(name) {
        this.name = name;

        /**
         * Number of points from matches
         */
        this.leaguePoints = 0;
    }

    get name() {
        return this.name;
    }

    updateLeaguePoints(points) {
        this.leaguePoints += points;
    }
}