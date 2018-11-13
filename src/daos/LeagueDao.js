import Team from '../models/Team.js';

/**
 * Data access object for League app
 */
export default class LeagueDao {

    constructor() {
        /**
         * In memory representation of matches.
         */
        this.matches = [];
    }

    getTeams() {
        return [new Team('Juventus'),
            new Team('Manchester United'),
            new Team('Valencia'),
            new Team('Young Boys')
        ]
    }

    saveMatch(index, match) {
        if (index === -1) {
            this.matches.push(match);
        } else {
            this.matches[index] = match;
        }
    }

    removeMatch(index) {

    }

    getMatch(index) {
        return this.matches[index];
    }

    getMatches() {
        return this.matches;
    }
}