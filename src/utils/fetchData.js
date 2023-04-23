import { useQuery } from "react-query"

const sheets = {
    'pgcLeaderboard': ['1X5f0TtmTKKTK21SQn8pFu9Zmm6eekE-GvavnxaY6EHc', 'Leaderboards'],
    'pgaLeaderboard': ['1SUD_Ga1u2mvhxygSqz7hR0m9RHtSGIDJyMkCt-pxczA', 'Tournaments'],
    'golferStats': ['1SUD_Ga1u2mvhxygSqz7hR0m9RHtSGIDJyMkCt-pxczA', 'GolferStats'],
    'pgcStandings': ['1X5f0TtmTKKTK21SQn8pFu9Zmm6eekE-GvavnxaY6EHc', 'Standings'],
    'tournaments': ['1EhRq77hWT0w_chnNVYhOq5_W_FQ--mPbliDyv3YHWG4', 'Tournaments'],
}
async function queryFunc({ queryKey }) {
    const [, sheetsKey] = queryKey
    console.log('query: '+sheetsKey)
    const data = await fetch('https://opensheet.elk.sh/' + sheets[sheetsKey][0] + '/' + sheets[sheetsKey][1])
    return data.json()
}

export function useLeagueData() {
    var tourneys = usePGCTournaments()
    var standings = usePGCStandings()
    var golferStats = useGolferStats()
    return {
        'allTourneys': tourneys.allTourneys,
        'previousTourney': tourneys.previousTourney,
        'currentTourney': tourneys.currentTourney,
        'nextTourney': tourneys.nextTourney,
        'futureTourney': tourneys.futureTourney,
        'standings': standings.standings,
        'golferStats': golferStats.data,
        'isLoading': tourneys.isLoading || standings.isLoading || golferStats.isLoading,
        'isError': tourneys.isError || standings.isError || golferStats.isError,
    }
}
export function usePGCStandings() {
    const standings = useQuery(['standings', 'pgcStandings'], queryFunc)
    return {
        'standings': standings.data || null,
        'isLoading': standings.isLoading,
        'isError': standings.isError,
    }
}
export function usePGCTournaments() {
    const allTourneys = useQuery(['allTournaments', 'tournaments'], queryFunc)
    const pgaLeaderboard = useQuery(['pgaLeaderboard', 'pgaLeaderboard'], queryFunc, { refetchInterval: 90000, })
    const pgcLeaderboard = useQuery(['pgcLeaderboard', 'pgcLeaderboard'], queryFunc, { refetchInterval: 90000, })
    const now = new Date()
    var output = {
        'allTourneys': null,
        'previousTourney': null,
        'currentTourney': null,
        'nextTourney': null,
        'futureTourney': null,
        'isLoading': allTourneys.isLoading,
        'isError': allTourneys.isError,
    }
    if (!allTourneys.data || !pgaLeaderboard.data || !pgcLeaderboard.data) { return output }
    console.log(pgaLeaderboard)
    console.log(pgcLeaderboard)
    allTourneys.data?.forEach(obj => {
        obj['pgaLeaderboard'] = pgaLeaderboard.data?.filter(a => a.tourneyID === obj.tourneyID)
        obj['pgcLeaderboard'] = pgcLeaderboard.data?.filter(a => a.tourneyID === obj.tourneyID)
        var start = new Date(obj['StartDate'])
        var end = new Date(obj['EndDate'])
        var prevEnd = new Date(obj['EndDate'])
        prevEnd.setDate(prevEnd.getDate() + 2)
        var nextStart = new Date(obj['StartDate'])
        nextStart.setDate(nextStart.getDate() - 3)
        var futureStart = new Date(obj['StartDate'])
        futureStart.setDate(futureStart.getDate() - 23)
        if (now < start && now > nextStart) {
            output.nextTourney = obj
        } else if (now > end && now < prevEnd) {
            output.previousTourney = obj
        } else if (now < end && now > start) {
            output.currentTourney = obj
        } else if (now <= nextStart && now > futureStart && !output.futureTourney) {
            output.futureTourney = obj
        }
    })
    output.allTourneys = allTourneys.data
    output.isLoading = allTourneys.isLoading
    output.isError = allTourneys.isError
    return output
}
export function useGolferStats() {
    const golferStats = useQuery(['golferStats', 'golferStats'], queryFunc)
    return golferStats

}
