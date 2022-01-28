import axios from 'axios';


export async function fetchTournamentsInfo() {
    const { data } = await axios.get('https://opensheet.elk.sh/1yw27UrtfNwCHFjPM3nZASXsnxWdptmRhuqe9xKJsSh8/1')
    return data.slice(0, 18)
}

export async function fetchCurrentTournamentInfo() {
    const { data } = await axios.get('https://opensheet.elk.sh/1yw27UrtfNwCHFjPM3nZASXsnxWdptmRhuqe9xKJsSh8/1')
    return data[18]
}

export async function fetchNextTournamentInfo() {
    const { data } = await axios.get('https://opensheet.elk.sh/1yw27UrtfNwCHFjPM3nZASXsnxWdptmRhuqe9xKJsSh8/1')
    return data[19]
}

export async function fetchLeaderboardData() {
    const { data } = await axios.get('https://opensheet.elk.sh/1TYcMVDftohm9MqfgKDv2DHMTSbFE6JCfCzcYKB8IA1Y/1')
    return data
}

export async function fetchStandingsData() {
    const { data } = await axios.get('https://opensheet.elk.sh/1w0fLIpGBJQsGA3IcQ5ha4FHdZtZKaZUggDi6sl9OiVg/1')
    return data
}









export function fetchTournamentInfoById(tournamentInfo, tourneyId) {
    return tournamentInfo.data.filter(obj => obj.id === tourneyId)[0]
}
export function fetchLeaderboardById(leaderboardData, tourneyId) {
    // return leaderboardData.data.filter(obj => obj.tourneyId === tourneyId)[0]
    return leaderboardData.data
}