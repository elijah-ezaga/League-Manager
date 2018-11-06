import LeagueDao from '../../src/daos/LeagueDao.js'
import Team from '../../src/models/Team.js';

describe('LeagueDao.js', () => {

    const league = new LeagueDao();

    const ajax = new Team('Ajax Amsterdam');
    const psv = new Team('PSV Eindhoven');
    const feyenoord = new Team('Feyenoord FC');

    it('Should save teams', () => {
        league.saveMatch(-1, new Match(ajax, psv, 1, 0))

        let match = new Match(psv, feyenoord, 2, 3);
        league.saveMatch(-1, match);
        league.saveMatch(-1, new Match(feyenoord, ajax, 2, 1));

        expect(league.getMatches()).toHaveLength(3);
        match.homeTeamGoals = 4;
        league.saveMatch(1, match);

        expect(league.getMatch(1).homeTeamGoals).toBe(4);
        expect(league.homeTeamPoints).toBe(3);
    })

});