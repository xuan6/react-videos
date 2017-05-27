import React from 'react';

const VideoDetail = ({video}) => {

//check if data is loaded
    if(!video){ //if data is undefined will return loading div and stop here
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    // const url = 'https://www.youtube.com/embed/'+videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )

};

export default VideoDetail;