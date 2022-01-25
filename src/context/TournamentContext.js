import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const TourneyContextData = createContext();

export const TourneyContext = ({ children }) => {
    const [tournamentData, setTournamentData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://opensheet.elk.sh/1yw27UrtfNwCHFjPM3nZASXsnxWdptmRhuqe9xKJsSh8/1", {})
            .then((res) => {
                setTournamentData(res);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    var store = {
        tournamentData: [tournamentData, setTournamentData],
        isLoading: [isLoading, setIsLoading],
    }
    return (
        <TourneyContextData.Provider value={store}>
            {children}
        </TourneyContextData.Provider>
    )
}


export const useCurrentTourney = () => {
    const { tournamentData, isLoading } = useContext(TourneyContextData)
    var currentTourney = isLoading[0] ? null : tournamentData[0].data[18]
    return { state: currentTourney, isLoading: isLoading[0] }
}

export const useNextTourney = () => {
    const { tournamentData, isLoading } = useContext(TourneyContextData)
    var nextTourney = isLoading[0] ? null : tournamentData[0].data[19]
    return { state: nextTourney, isLoading: isLoading[0] }
}

export const useAllTourneys = () => {
    const { tournamentData, isLoading } = useContext(TourneyContextData)
    var allTourneys = isLoading[0] ? null : tournamentData[0].data
    return { state: allTourneys, isLoading: isLoading[0] }
}

export const useTourneyById = (id) => {
    const { tournamentData, isLoading } = useContext(TourneyContextData)
    var tourney = isLoading[0] ? null : tournamentData[0].data[id - 1]
    return { state: tourney, isLoading: isLoading[0] }
}