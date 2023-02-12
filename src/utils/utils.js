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