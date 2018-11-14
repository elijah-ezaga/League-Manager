<template>
    <div>
        <h2>League Table</h2>

        <table>
            <thead>
                <tr>
                    <th>Team</th>
                    <th># Matches</th>
                    <th># Points</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="team in table" v-bind:key="team.name">
                    <td> {{ team.name }} </td>
                    <td> {{ team.matchesPlayed }} </td>
                    <td> {{ team.leaguePoints }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import LeagueDao from '../daos/LeagueDao.js';

export default {
    data: function() {
        return {
            table: LeagueDao.getLeagueTable()
        };
    }
}
</script>

<style scoped>

</style>
