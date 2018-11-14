import Team from '../models/Team.js';
import Match from '../models/Match.js'

/**
 * Data access object for League app
 */
class LeagueDao {

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
        }
    }

    removeMatch(index) {

    }

    getMatch(index) {
        if (index === -1) {
            return new Match(new Team('team'), new Team('team'), 0, 0);
        }

        return this.matches[index];
    }

    getMatches() {
        return this.matches;
    }
}

export default new LeagueDao();