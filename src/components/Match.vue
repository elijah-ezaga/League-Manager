<template>
    <div>
        <h2>Save Match</h2>
        <div class="ui form">

            <!-- Home team info -->
            <div class="fields">
                <div class="field">
                    <label>Home</label>
                    <select v-model="match.homeTeam">
                        <option v-for="team in teams" v-bind:key="team.name" v-bind:value="team">
                            {{ team.name }}
                        </option>
                    </select>
                </div>

                <div class="field">
                    <label>Goals Scored</label>
                     <input type="text" placeholder="# goals" v-model="match.homeTeamGoals">
                </div>
            </div>           

            <!-- Away team info -->
            <div class="fields">
                <div class="field">
                    <label>Away</label>
                    <select v-model="match.guestTeam">
                        <option v-for="team in teams" v-bind:key="team.name" v-bind:value="team">
                            {{ team.name }}
                        </option>
                    </select>
                </div>

                <div class="field">
                    <label>Goals Scored</label>
                     <input type="text" placeholder="# goals"  v-model="match.guestTeamGoals">
                </div>
            </div>

            <div class="field">
                <button class="ui button" v-on:click="saveMatch">Save</button>
            </div>
        </div>
    </div>
</template>
    
<script>
import LeagueDao from '../daos/LeagueDao.js'
import Match from '../models/Match.js'
import Team from '../models/Team.js'

const DEFAULT_TEAM = new Team('team');

export default {
    data: function() {
        return {
            match: new Match(DEFAULT_TEAM, DEFAULT_TEAM, 0, 0),
            teams: LeagueDao.getTeams()
        }
    },

    methods: {
        saveMatch: function() {
            LeagueDao.saveMatch(-1, this.match);
            this.$router.push('matches');
        }
    }
}
</script>

<style scoped>
div.ui.form {
    width: 700px;
}
</style>