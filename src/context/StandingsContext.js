import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const StandingsContextData = createContext();

export const StandingsContext = ({ children }) => {
    const [standingsData, setStandingsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://opensheet.elk.sh/1w0fLIpGBJQsGA3IcQ5ha4FHdZtZKaZUggDi6sl9OiVg/1", {})
            .then((res) => {
                setStandingsData(res);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    var store = {
        standingsData: [standingsData, setStandingsData],
        isLoading: [isLoading, setIsLoading],
    }
    return (
        <StandingsContextData.Provider value={store}>
            {children}
        </StandingsContextData.Provider>
    )
}


export const useCurrentStandings = () => {
    const { standingsData, isLoading } = useContext(StandingsContextData)
    var currentStandings = isLoading[0] ? null : standingsData[0]
    return { state: currentStandings, isLoading: isLoading[0] }
}