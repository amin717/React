import React, { PureComponent } from 'react'
// import VideoPlayer from './VideoPlayer'
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';
import 'videojs-seek-buttons';
import 'videojs-seek-buttons/dist/videojs-seek-buttons.css';
import 'videojs-contrib-quality-levels';
import 'videojs-hls-quality-selector';
import 'videojs-hls-quality-selector/dist/videojs-hls-quality-selector.css';
import 'videojs-hotkeys';
// import 'videojs-auto-caption';
import 'videojs-event-tracking';
// import 'videojs-straas-live-event-listener';
// import 'videojs-tracking-events';
// import 'videojs-tracking-events/dist/videojs-tracking-events';
// import '@youon/videojs-sprite-thumbnails'
// import 'videojs-shuttle-controls'
// import 'videojs-creo-slide'
// import 'videojs-settings'
import 'videojs-frames'
// import 'videojs-hlsjs-progress-control'
// import '@youon/videojs-osg'
// import 'videojs-vtt-thumbnails'
// import 'videojs-landscape-fullscreen.min.js'
// import 'videojs-landscape-fullscreen'

import lang from '../lang/fa.json'
// import 'videojs-language-switch';
// import 'videojs-language-switch/dist/videojs-language-switch.css';
// import './player.css'
import '../videojs-filmgardi.css';
import FilmgardiPlayer from '../filmgardi-player';

const filmgardiPlayer = new FilmgardiPlayer();

videojs.addLanguage('fa', lang);
var colorIndex = 0;
var fontIndex = 0;
var backgroundIndex = 0;

class Index extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            update: false
        }

    }
    componentDidMount() {
        var player = videojs('my-video', { language: 'fa', eventTracking: true, playbackRates: [] });
        player.hlsQualitySelector({
            displayCurrentQuality: true
        });

        player.seekButtons({
            forward: 30,
            back: 10
        });
        document.getElementsByClassName('vjs-subs-caps-button')[0].firstChild.lastChild.click = function () { console.log('hi') }
        // if (window.innerWidth <= 1366) {
        //     screen.orientation.lock('landscape');
        // }
        document.addEventListener('click', (e) => { this.handleClick(e, player) });
        document.addEventListener('focus', (e) => { this.handleFocus(e) }, true);
        window.addEventListener('load', function () {
            document.getElementsByClassName('vjs-quality-selector')[0].firstChild.firstChild.innerText = 'خودکار';
        })
        // const lis= document.getElementsByClassName('vjs-subs-caps-button')[0].lastChild.firstChild.firstChild;
        //  const lis=document.getElementsByClassName('vjs-texttrack-settings');
        // console.log('amin',lis )
        // document.getElementsByClassName('vjs-menu-item vjs-texttrack-settings').addEventListener('click',this.handleClick);
        //  player.frames();
        // player.shuttleControls({
        //     playPauseKeys: [' ', 'k'],
        //     backwardKeys: ['j'],
        //     forwardKey: ['l'],
        //     backwardFrameKey: ['ArrowLeft'],
        //     forwardFrameKey: ['ArrowRight'],
        //     shiftMagnification: 10,
        //     fps: 30
        // });
        // player.vttThumbnails();
        player.eventTracking();
        // player.straasLiveEventListener();
        // player.trackingEvents();
        player.ready(function () {
            // const settingButton = document.getElementsByClassName("vjs-texttrack-settings")[0];
            // if (settingButton) {
            //     settingButton.addEventListener('mousedown', (e) => { console.log("setting clicked...!") });
            // }
            this.hotkeys({
                volumeStep: 0.1,
                fullscreenKey: function (event, player) {
                    // override fullscreen to trigger when pressing the F key or Ctrl+Enter
                    return ((event.which === 70) || (event.ctrlKey && event.which === 13));
                },
                customKeys: {
                    // Create custom hotkeys

                    ctrldKey: {
                        key: function (event) {
                            // Toggle something with CTRL + D Key
                            return (event.ctrlKey && event.which === 68);
                        },
                        handler: function (player, options, event) {
                            // Using mute as an example
                            if (options.enableMute) {
                                player.muted(!player.muted());
                            }
                        }
                    }
                }
            });
        })
        // player.creoSlide();
        // player.settings();
        // player.hlsjsProgressControl();
        // player.osg();
        // player.landscapeFullscreen();
        // player.scrubbing()
        // player.languageSwitch
        //////////////////////////////////////////////////////
        var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
        var persianMap = persianDigits.split("");
        var convertToPersianNumber = (input) => {
            return input.replace(/\d/g, function (m) {
                return persianMap[parseInt(m)];
            });
        }
        var handleVolume = function () {
            if (player.muted()) {
                document.getElementsByClassName('vjs-volume-panel vjs-control vjs-volume-panel-horizontal')[0].firstChild.lastChild.style.display = 'none';
            }
            else {
                document.getElementsByClassName('vjs-volume-panel vjs-control vjs-volume-panel-horizontal')[0].firstChild.lastChild.style.display = (player.volume() * 100).toFixed(0) > 0 ? 'flex' : "none";
                document.getElementsByClassName('vjs-volume-panel vjs-control vjs-volume-panel-horizontal')[0].firstChild.lastChild.innerText = convertToPersianNumber((player.volume() * 100).toFixed(0));

            }

            // if (player.currentTime() > 50) {
            //     player.off('timeupdate', timeCheck);
            //     player.trigger('played50Second');
            // }
        };
        player.one('play', () => {
            filmgardiPlayer.changeDomPosition('vjs-seek-button skip-back', 'vjs-play-control');
            filmgardiPlayer.changeTimeDom();
          });
          
        player.on('played50Second', function () {
            console.log('...');
        });
        player.on('volumechange', handleVolume);
        player.on('enter', function () { console.log('hoy') });

        this.init();
        // player.spriteThumbnails({
        //     interval: 3,
        //     url: 'https://ghatreh.filmgardi.com//sites/default/files/images/poster/1398/zahremar.jpg',
        //     width: 160,
        //     height: 90
        // });
        //////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////
        // videojs.options.flash.swf = '../../node_modules/videojs-swf/dist/video-js.swf';
        // player.autoCaption();
    }
    updateTextTrack = (player, setting) => {
        if (player && player.textTrackSettings) {
            const textTrackSettingTemp = player.textTrackSettings;
            textTrackSettingTemp.setValues(setting);
            textTrackSettingTemp.updateDisplay();
            player.play(true);
        }
    }
    colors = [
        { color: "#FFF" },
        { color: "#000" },
        { color: "#FF0" }
    ];
    backgrounds = [
        { backgroundClr: "#FFF" },
        { backgroundClr: "#000" },
        { backgroundClr: "transparent" }
    ];
    fontSizes = [
        { fontSize: 1.5 },
        { fontSize: 2 },
        { fontSize: 1 }
    ]
    handleClick(e, player) {
        // debugger;
        // if (player.muted()) {
        //     document.getElementsByClassName('vjs-volume-panel vjs-control vjs-volume-panel-horizontal')[0].firstChild.lastChild.innerHTML = '۰';
        //     this.setState({ update: true });
        // }
        if (e.target.className.includes('back_setting')) {
            // debugger;
            document.getElementsByClassName('vjs-subs-caps-button')[0].parentNode.style.display = 'block';

            document.getElementsByClassName('menu_setting')[0].style.display = 'none';
        }
        if (e.target.className === 'sub_color') {
            const textColor = this.colors[colorIndex];
            colorIndex++;
            this.updateTextTrack(player, {
                color: textColor.color,
                "font-family": "IRANSans",
                fontPercent: 1,
                windowColor: "transparent",
                windowOpacity: "1"
            })
            if (colorIndex === this.colors.length) {
                colorIndex = 0;
            }
        }
        else if (e.target.className === "sub_font") {
            const fontSize = this.fontSizes[fontIndex];
            fontIndex++;
            this.updateTextTrack(player, {
                fontPercent: fontSize.fontSize
            })
            if (fontIndex === this.fontSizes.length) {
                fontIndex = 0;
            }
        }
        else if (e.target.className === 'sub_background') {
            const background = this.backgrounds[backgroundIndex];
            backgroundIndex++;
            this.updateTextTrack(player, {
                backgroundColor: background.backgroundClr
            })
            if (backgroundIndex === this.backgrounds.length) {
                backgroundIndex = 0;
            }
        }
        // else if (e.target.className === 'back_setting') {
        //     const modalSetting = document.getElementsByClassName('menu_setting')[0];
        //     if (modalSetting) {
        //         modalSetting.classList.add("vjs-hidden");
        //         modalSetting.setAttribute("aria-hidden", true);
        //     }

        //     // document.getElementsByClassName('vjs-hidden')[0].style.display = 'block !important';
        //     const subsContainer = document.getElementsByClassName("vjs-subs-caps-button")[0];
        //     if (subsContainer) {
        //         const subMenuContainer = subsContainer.getElementsByClassName("vjs-menu")[0];
        //         if (subMenuContainer)
        //             subMenuContainer.classList.add("vjs-lock-showing")
        //     }

        // }
    }
    handleFocus(e) {
        // debugger;
        // if (e.target.className.includes('vjs-texttrack-settings')) {
        //     // debugger;
        //     document.getElementsByClassName('vjs-subs-caps-button')[0].lastChild.style.display = 'none';
        //     document.getElementsByClassName('menu_setting')[0].style.display = 'block';
        // }
        // if (e.target.className === 'vjs-menu-item' || e.target.className === 'vjs-menu-item vjs-selected' || e.target.className === 'vjs-menu-title') {
        //     setTimeout(() => {
        //         const quality = e.target.firstChild.innerText;
        //         if (quality !== undefined) {

        //             document.getElementsByClassName('vjs-quality-selector')[0].firstChild.firstChild.innerText = quality;
        //         }

        //     }, 150);
        //     setTimeout(() => {
        //         document.getElementsByClassName('vjs-subs-caps-button')[0].lastChild.style.display = 'none';
        //         document.getElementsByClassName('menu_setting')[0].style.display = 'none';
        //         if (document.getElementsByClassName('vjs-quality-selector')[0].firstChild.firstChild.innerText === 'auto') {
        //             document.getElementsByClassName('vjs-quality-selector')[0].firstChild.firstChild.innerText = 'خودکار'
        //         }
        //     }, 400);
        // }
        // if (e.target.className === 'vjs-menu-item vjs-captions-menu-item') {
        //     if (e.target.innerText.includes('فارسی')) {
        //         document.getElementsByClassName('vjs-subs-caps-button')[1].lastChild.innerText = 'فا'
        //         document.getElementsByClassName('vjs-subs-caps-button')[1].lastChild.style.display = 'flex'
        //     }
        //     if (e.target.innerText.includes('انگلیسی')) {
        //         document.getElementsByClassName('vjs-subs-caps-button')[1].lastChild.innerText = 'EN'
        //         document.getElementsByClassName('vjs-subs-caps-button')[1].lastChild.style.display = 'flex'
        //     }
        //     if (e.target.innerText.includes('خاموش')) {
        //         document.getElementsByClassName('vjs-subs-caps-button')[1].lastChild.style.display = 'none'
        //     }

        // }
    }
    init() {

        const volumeText = document.getElementsByClassName('vjs-volume-panel vjs-control vjs-volume-panel-horizontal')[0].firstChild.lastChild;
        volumeText.innerText = "۱۰۰";
        volumeText.classList.add("show-volume");

        // document.getElementsByClassName('vjs-subs-caps-button')[0].firstChild.firstChild.innerHTML = '<div/>';
        // document.getElementsByClassName('vjs-subs-caps-button')[0].firstChild.firstChild.firstChild.classList.add('setting');
        document.getElementsByClassName('vjs-text-track-settings')[0].classList.add('menu_setting');
        document.getElementsByClassName('vjs-menu')[4].classList.add('my_menu');
        // const my_this = this;
        // setTimeout(() => {
        //     var elem = document.getElementsByClassName('menu_setting')[0];
        //     elem.innerHTML = `
        //     <ul class='style_setting'>
        //          <li ><span>تنظیمات</span> <img /></li>
        //          <li onclick='deleteRow()'><img /><span>رنگ متن</span></li>
        //          <li><img /><span>اندازه متن</span></li>
        //          <li><img /><span>رنگ پس زمینه</span></li>
        //          <li onclick={document.getElementsByClassName('menu_setting')[0].style.display='none';}><span>بازگشت</span><img /></li>
        //     </ul>
        //     ` ;
        //     console.log(elem.i)
        //     // document.getElementsByClassName('my_menu')[0].style.display='block';
        // }, 100, my_this);
        // React.createElement('ul', {class:'style_setting'},
        //     [
        //         React.createElement('li', {}, [
        //             React.createElement('span', {}, 'تنظیمات'),
        //             React.createElement('img', {}, )
        //         ]),
        //         React.createElement('li', {}, [
        //             React.createElement('span', {}, 'رنگ متن'),
        //             React.createElement('img', {}, )
        //         ]),
        //         React.createElement('li', {}, [
        //             React.createElement('span', {}, 'اندازه متن'),
        //             React.createElement('img', {}, )
        //         ]),
        //         React.createElement('li', {}, [
        //             React.createElement('span', {}, 'رنگ پس زمینه'),
        //             React.createElement('img', {}, )
        //         ]),
        //         React.createElement('li', {}, [
        //             React.createElement('span', {}, 'Vanilla'),
        //             React.createElement('img', {}, )
        //         ]),

        //     ]
        // );
        var elem = document.getElementsByClassName('menu_setting')[0];
        elem.innerHTML += `
            <ul class='style_setting'>
                 <li ><span>تنظیمات</span> <span /></li>
                 <li class="sub_color">
                 <span class="sub_color"></span><span class="sub_color">رنگ متن</span></li>
                 <li class="sub_font"><span class="sub_font"></span><span class="sub_font">اندازه متن</span></li>
                 <li class="sub_background"><span class="sub_background"></span><span class="sub_background">رنگ پس زمینه</span></li>
                 <li class="back_setting"><span class="back_setting">بازگشت</span><span class="back_setting"/></li>
            </ul>
            ` ;
        // document.getElementsByClassName('menu_setting')[0].style.display='none';
        document.getElementsByClassName('vjs-subs-caps-button')[1].lastChild.innerText = '';
        document.getElementsByClassName('vjs-subs-caps-button')[0].lastChild.classList.add('hidden_setting');
        //  document.getElementsByClassName('vjs-quality-selector')[0].firstChild.firstChild.innerText = 'خودکار';
    }

    render() {
        this.setState({ call: true })
        return (
            <div ref={elem => this.nv = elem}>
                {/* <head>
                    <link rel="stylesheet" href="//path/to/videojs-seek-buttons.css" />
                    <script src="//path/to/video.min.js"></script>
                    <script src="//path/to/videojs-seek-buttons.min.js"></script>
                </head> */}
                {/* <VideoPlayer {...videoJsOptions} />  */}
                <video id="my-video" className="video-js vjs-big-play-centered vjs-filmgardi fullscreen"
                    controls preload="none" poster='http://video-js.zencoder.com/oceans-clip.jpg'

                    data-setup='{ "aspectRatio":"640:310","language": "fa", "playbackRates": [1, 1.5, 2]},"fluid": true'>
                    {/* <source src="https://vjs.zencdn.net/v/oceans.mp4" type='video/mp4' /> */}
                    <source src="https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8" type='application/x-mpegURL' />
                    <track src="https://www.iandevlin.com/html5test/webvtt/upc-video-subtitles-en.vtt" kind="captions" srclang="fa" label="فارسی"></track>
                    <track src="http://example.com/oceans.vtt" kind="captions" srclang="fa" label="انگلیسی"></track>
                    <track src="http://example.com/oceans.vtt" kind="captions" srclang="fa" label="خاموش"></track>
                </video>
            </div>
        )
    }
}

export default Index