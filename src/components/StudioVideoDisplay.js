import React from 'react';
import './StudioVideoDisplay.css'

function StudioVideoDisplay(props) {
    if (!(props.embedId)) { return <></> }
    return (
        <div className="m-auto">
            <div className="overflow-hidden pb-12 relative h-0 my-4 rounded-lg">
                <iframe
                    className="w-full h-full left-0 top-0 absolute"
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${props.embedId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </div>
    )
}

export default StudioVideoDisplay;
