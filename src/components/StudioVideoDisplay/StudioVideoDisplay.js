import React from 'react';
import './StudioVideoDisplay.css'

function StudioVideoDisplay(props) {
    if (!(props.embedId)) { return <></> }
    return (
        <div className="studiovideo-container">
            <div className="video-responsive">
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${props.embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </div>
    )
}

export default StudioVideoDisplay;
