import React from 'react';

// const VideoListItem = (props) => {
//     const video = props.video    
//     const onVideoSelect = props.onVideoSelect
//     return <li>Video</li>
// }

//identical to the above
const VideoListItem = ({video, onVideoSelect}) => { //take 2 properties at the same time
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        //when clidk on li element, pass the selected li to 'video' property
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl}/>
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>
    </li>
    )
}

export default VideoListItem;