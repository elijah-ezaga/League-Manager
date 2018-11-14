<template>
    <div>
        <h2>Played Matches</h2>
        <div v-for="(match, index) in matches" v-bind:key="match.toString">
            <div>
                {{ match.homeTeam.name }} {{ match.homeTeamGoals }}
                - vs - 
                {{ match.guestTeam.name }} {{ match.guestTeamGoals }}

                <router-link v-bind:to="'/match/' + index"><i class="edit icon"></i></router-link>
                <button @click="removeMatch(index)"><i class="trash icon"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
import LeagueDao from '../daos/LeagueDao.js';


export default {
    data: function() {
        return {
            matches: LeagueDao.getMatches()
        }
    },

    methods: {
        removeMatch: function(index) {
            LeagueDao.removeMatch(index);
        }
    }
}
</script>

<style scoped>

</style>