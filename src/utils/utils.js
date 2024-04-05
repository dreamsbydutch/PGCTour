import { useState, useEffect } from 'react';
import './utils.css'


export function getRkChange(rkChange) {
  var style = {}
  var arrow = ''

  if (+(rkChange) > 0) {
    arrow = 'up'
    style = {
      color: 'rgb(0,128,0)'
    }
  } else if (+(rkChange) < 0) {
    arrow = 'down'
    style = {
      color: 'rgb(178,34,34)'
    }
  } else if (rkChange === '-') {
    rkChange = 0
  }

  return (
    <span className="utils-rankchange" style={style}>
      <span className="utils-rkchange-arrow">
        {arrow === 'up' ?
          <i className="fa fa-long-arrow-up" aria-hidden="true"></i> :
          arrow === 'down' ?
            <i className="fa fa-long-arrow-down" aria-hidden="true"></i> :
            <i className="fa fa-arrows-h" aria-hidden="true"></i>}
      </span>
      {Math.abs(rkChange) === 0 ?
        "" : Math.abs(rkChange)}
    </span>
  )
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


export function formatMoney(number) {
    number = Number(number)
    if (Math.abs(number) >= 1e6) {
        return '$' + (number / 1e6).toFixed(1) + 'M';
    } else if (Math.abs(number) >= 1e4) {
        return '$' + (number / 1e3).toFixed(0) + 'k';
    } else if (Math.abs(number) === 0 || isNaN(number)) {
        return '-'
    } else {
        return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
    }
}


export function addRankingSuffix(rank) {
  if (rank % 10 === 1 && rank % 100 !== 11) {
    return rank + 'st';
  } else if (rank % 10 === 2 && rank % 100 !== 12) {
    return rank + 'nd';
  } else if (rank % 10 === 3 && rank % 100 !== 13) {
    return rank + 'rd';
  } else {
    return rank + 'th';
  }
}

export function formatScore(score) {
  switch (true) {
    case (+score > 99):
        score = null
        break
    case (+score > 0):
        score = "+" + (+score)
        break
    case (score === '0'):
        score = "E"
        break
    default:
        break
  }
  return score
}
export function formatThru(thru,teetime) {
  if (+thru === 18) {
    return "F"
  } else if (+thru > 0) {
    return +thru
  } else {
    return teetime
  }
}