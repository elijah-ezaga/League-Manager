<template>
    <div>
        <h2>Soccer Teams</h2>
        <ol>
            <li v-for="team in teams" v-bind:key="team.name">
                {{ team.name }}
            </li>
        </ol>
    </div>
</template>

<script>
import LeagueDao from '../daos/LeagueDao.js'

export default {
    data: function() {
        return {
            teams: LeagueDao.getTeams()
        }
    }
}
</script>

<style scoped>
ol {
    text-align: left;
}
</style>
