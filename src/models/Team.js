
/**
 * Represents a team involved in some league
 */
export default class Team {

    constructor(name) {
        this._name = name;

        this._matchesPlayed = 0;

        /**
         * Number of points from matches
         */
        this._leaguePoints = 0;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get leaguePoints() {
        return this._leaguePoints;
    }

    updateLeaguePoints(points) {
        this._leaguePoints += points;
    }

    get matchesPlayed() {
        return this._matchesPlayed;
    }

    incrementMatchesPlayed() {
        ++this._matchesPlayed;
    }
}