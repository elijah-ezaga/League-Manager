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

    getLeagueTable() {
        const table = [];
        for (let i = 0; i < this.matches.length; ++i) {
            let match = this.matches[i];

            let homeTeam = LeagueDao.getTeamFromTable(table, match.homeTeam);
            LeagueDao.updateTeamInfo(homeTeam, match.homeTeamPoints);

            let guestTeam = LeagueDao.getTeamFromTable(table, match.guestTeam);
            LeagueDao.updateTeamInfo(guestTeam, match.guestTeamPoints);
        }

        return table;
    }

    static updateTeamInfo(team, pointsFromMatch) {
        team.incrementMatchesPlayed();
        team.updateLeaguePoints(pointsFromMatch);
    }

    static getTeamFromTable(table, team) {
        for (let i = 0; i < table.length; ++i) {
            if (table[i].name === team.name) {
                return table[i];
            }
        }

        const newTeam = new Team(team.name);
        table.push(newTeam);
        return newTeam;
    }
}

export default new LeagueDao();