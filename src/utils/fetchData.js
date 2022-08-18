import axios from 'axios';


export async function fetchTournamentsInfo() {
    const { data } = await axios.get('https://opensheet.elk.sh/1yw27UrtfNwCHFjPM3nZASXsnxWdptmRhuqe9xKJsSh8/1')
    return data.slice(0, 18)
}

export async function fetchCurrentTournamentInfo() {
    const { data } = await axios.get('https://opensheet.elk.sh/1yw27UrtfNwCHFjPM3nZASXsnxWdptmRhuqe9xKJsSh8/1')
    if (!(data[18])) { return null }
    if (Object.keys(data[18]).length > 0) {
        return data[18]
    } else {
        return null
    }
}

export async function fetchNextTournamentInfo() {
    const { data } = await axios.get('https://opensheet.elk.sh/1yw27UrtfNwCHFjPM3nZASXsnxWdptmRhuqe9xKJsSh8/1')
    if (!(data[19])) { return null }
    if (Object.keys(data[19]).length > 0) {
        return data[19]
    } else {
        return null
    }
}

export async function fetchPlayoffTournamentInfo() {
    const { data } = await axios.get('https://opensheet.elk.sh/1yw27UrtfNwCHFjPM3nZASXsnxWdptmRhuqe9xKJsSh8/1')
    if (!(data[16])) { return null }
    if (Object.keys(data[16]).length > 0) {
        return data[16]
    } else {
        return null
    }
}

export async function fetchPrevTournamentInfo() {
    const { data } = await axios.get('https://opensheet.elk.sh/1yw27UrtfNwCHFjPM3nZASXsnxWdptmRhuqe9xKJsSh8/1')
    if (!(data[20])) { return null }
    if (Object.keys(data[20]).length > 0) {
        return data[20]
    } else {
        return null
    }
}


export async function fetchLeaderboardData() {
    const { data } = await axios.get('https://opensheet.elk.sh/1TYcMVDftohm9MqfgKDv2DHMTSbFE6JCfCzcYKB8IA1Y/1')
    return data
}
export async function fetchLiveLeaderboardData(tourneyId) {
    const { data } = await axios.get('https://opensheet.elk.sh/1TYcMVDftohm9MqfgKDv2DHMTSbFE6JCfCzcYKB8IA1Y/1')
    return data.filter(obj => obj.TourneyID === tourneyId)
}
export async function fetchPlayoffLeaderboardData() {
    const { data } = await axios.get('https://opensheet.elk.sh/1yCm41aGbMO3lQGmfhDfGCUku77JE9t5fz_ur3_B64S0/1')
    return data
}
export async function fetchPGALeaderboardData() {
    const { data } = await axios.get('https://opensheet.elk.sh/15sKFQVDdaYmXXAqLhBqYAeFLSrE5t4yq0TpJ6wy6pao/1')
    return data
}
export async function fetchLivePGALeaderboardData(tourneyId) {
    const { data } = await axios.get('https://opensheet.elk.sh/15sKFQVDdaYmXXAqLhBqYAeFLSrE5t4yq0TpJ6wy6pao/1')
    return data.filter(obj => obj.TourneyID === tourneyId)
}

export async function fetchStandingsData() {
    const { data } = await axios.get('https://opensheet.elk.sh/1kkJtcX4E4NqTOFPwfSasOVeqbau74epxQGz6QGQN0wo/1')
    return data
}

export async function fetchGolferStatsData() {
    const { data } = await axios.get('https://opensheet.elk.sh/1kw_-NpJfwnl5cKMYeWojoMLCZuglSDxd5-W_2LNHWE0/4')
    return data
}









export function fetchTournamentInfoById(tournamentInfo, tourneyId) {
    return tournamentInfo.data.filter(obj => obj.id === tourneyId)[0]
}
export function fetchLeaderboardById(leaderboardData, tourneyId) {
    return leaderboardData.filter(obj => obj.TourneyID === tourneyId)
}
