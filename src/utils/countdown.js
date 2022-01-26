import { useEffect, useRef } from "react"

export function useInterval(callback, delay) {
    const savedCallback = useRef()

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        if (delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}

// https://stackoverflow.com/a/2998874/1673761
export const twoDigits = (num) => String(num).padStart(2, '0')

export function getTickerString(data) {
    var output = "<span className='rank'>"
    for (let i = 0, j = data.length; i < j; i++) {
        if (data[i].RawRk !== 11 && data[i].RawRk[0] === 1) {
            output += data[i].RawRk
            output += "st"
        } else if (data[i].RawRk !== 12 && data[i].RawRk[0] === 2) {
            output += data[i].RawRk
            output += "nd"
        } else if (data[i].RawRk !== 13 && data[i].RawRk[0] === 3) {
            output += data[i].RawRk
            output += "rd"
        } else {
            output += data[i].RawRk
            output += "th"

        }
        output += "</span> "
        output += data[i].TeamName
        output += " "
        output += data[i].Points
        output += " pts, "
        output += data[i].Earnings
        output += "  -----  "
    }
    return output
}