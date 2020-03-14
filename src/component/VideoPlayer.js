import React from 'react';
import videojs from 'video.js'
import 'video.js/dist/video-js.css';
import './player.css'
export default class VideoPlayer extends React.Component {
    componentDidMount() {
        // instantiate Video.js
        console.log('hi',this.videoNode);
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this)
        });
        // this.player.isFullscreen(true);
        // console.log(this.player.isFullscreen());
        // this.player.src([
        //     { type: 'video/mp4', src: 'http://www.example.com/path/to/video.mp4' },
        //     { type: 'video/webm', src: 'http://www.example.com/path/to/video.webm' },
        //     { type: 'video/ogg', src: 'http://www.example.com/path/to/video.ogv' }
        // ]);
        // this.player.poster('http://example.com/myImage.jpg');

        // Get the current player's VideoTrackList object.
        // var videoTrackList = this.player.videoTracks();

        // Listen to the "change" event.
        // videoTrackList.addEventListener('change', function () {
        //     console.log('hi');
        //     // Log the currently enabled VideoTrack label.
        //     for (var i = 0; i < videoTrackList.length; i++) {
        //         var track = videoTrackList[i];

        //         if (track.enabled) {
        //             console.log(track);
        //             return;
        //         }
        //     }
        // });
        // this.player.addClass('vjs-matrix');
    }


    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }



    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
    render() {
        return (
            <div>
                <div>
                    <video ref={node => this.videoNode = node} id="my_video_1" className="video-js vjs-default-skin" 
                    controls preload="none" poster='http://video-js.zencoder.com/oceans-clip.jpg'
                        data-setup='{ "aspectRatio":"640:350", "playbackRates": [1, 1.5, 2] },'>
                        <source src={this.props.sources[0]} type='video/mp4' />
                    </video>
                </div>
            </div>
        )
    }
}


