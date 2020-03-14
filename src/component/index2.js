import React, { Component } from 'react'
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';
import 'videojs-seek-buttons';
import 'videojs-seek-buttons/dist/videojs-seek-buttons.css';
import 'videojs-contrib-quality-levels';
import 'videojs-hls-quality-selector';
import 'videojs-hls-quality-selector/dist/videojs-hls-quality-selector.css';
import 'videojs-hotkeys';
import 'videojs-event-tracking';
import lang from '../lang/fa.json'
import '../videojs-filmgardi.css';
import FilmgardiPlayer from '../filmgardi-player';

const filmgardiPlayer = new FilmgardiPlayer();

videojs.addLanguage('fa', lang);
let colorIndex = 0;
let fontIndex = 0;
let backgroundIndex = 0;
class Index2 extends Component {
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
        document.addEventListener('click', (e) => { this.handleClick(e, player) });
        document.addEventListener('focus', (e) => { this.handleFocus(e) }, true);
        window.addEventListener('load', function () {
            document.getElementsByClassName('vjs-quality-selector')[0].firstChild.firstChild.innerText = 'خودکار';
        })
        player.ready(function () {
            this.hotkeys({
                volumeStep: 0.1,
                fullscreenKey: function (event, player) {
                    // override fullscreen to trigger when pressing the F key or Ctrl+Enter
                    return ((event.which === 70) || (event.ctrlKey && event.which === 13));
                },
                customKeys: {
                    // Create custom hotkeys

                    ctrldKey: {
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
        let persianDigits = "۰۱۲۳۴۵۶۷۸۹";
        let persianMap = persianDigits.split("");
        let convertToPersianNumber = (input) => {
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
        };
        player.on('volumechange', handleVolume);
        player.one('play', () => {
            filmgardiPlayer.changeDomPosition('vjs-seek-button skip-back', 'vjs-play-control');
            filmgardiPlayer.changeTimeDom();
        });
        this.init();
    }
    handleClick(e, player) {
        // debugger;
        // if (player.muted()) {
        //     document.getElementsByClassName('vjs-volume-panel vjs-control vjs-volume-panel-horizontal')[0].firstChild.lastChild.innerHTML = '۰';
        //     this.setState({ update: true });
        // }
        debugger;if (e.target.className === 'vjs-menu-item' || e.target.className === 'vjs-menu-item vjs-selected' || e.target.className === 'vjs-menu-title') {
            setTimeout(() => {
                let quality = e.target.firstChild.innerText;
                if (quality) {
                    debugger;
                    quality = quality.replace("p", "").replace(" ", "");
                }
                if (quality !== undefined) {
                    document.getElementsByClassName('vjs-quality-selector')[0].firstChild.firstChild.innerText = quality;
                }

            }, 150);
            setTimeout(() => {
                document.getElementsByClassName('vjs-subs-caps-button')[0].lastChild.style.display = 'none';
                document.getElementsByClassName('menu_setting')[0].style.display = 'none';
                if (document.getElementsByClassName('vjs-quality-selector')[0].firstChild.firstChild.innerText === 'auto') {
                    document.getElementsByClassName('vjs-quality-selector')[0].firstChild.firstChild.innerText = 'خودکار'
                }
            }, 400);
        }
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
         debugger;
        if (e.target.className.includes('vjs-texttrack-settings')) {
            // debugger;
            document.getElementsByClassName('vjs-subs-caps-button')[0].lastChild.style.display = 'none';
            document.getElementsByClassName('menu_setting')[0].style.display = 'block';
        }
        if (e.target.className === 'vjs-menu-item' || e.target.className === 'vjs-menu-item vjs-selected' || e.target.className === 'vjs-menu-title') {
            setTimeout(() => {
                let quality = e.target.firstChild.innerText;
                if (quality) {
           
                    quality = quality.replace("p", "").replace(" ", "");
                }
                if (quality !== undefined) {

                    document.getElementsByClassName('vjs-quality-selector')[0].firstChild.firstChild.innerText = quality;
                }

            }, 150);
            setTimeout(() => {
                document.getElementsByClassName('vjs-subs-caps-button')[0].lastChild.style.display = 'none';
                document.getElementsByClassName('menu_setting')[0].style.display = 'none';
                if (document.getElementsByClassName('vjs-quality-selector')[0].firstChild.firstChild.innerText === 'auto') {
                    document.getElementsByClassName('vjs-quality-selector')[0].firstChild.firstChild.innerText = 'خودکار'
                }
            }, 400);
        }
        if (e.target.className === 'vjs-menu-item vjs-captions-menu-item') {
            if (e.target.innerText.includes('فارسی')) {
                document.getElementsByClassName('vjs-subs-caps-button')[1].lastChild.innerText = 'فا'
                document.getElementsByClassName('vjs-subs-caps-button')[1].lastChild.style.display = 'flex'
            }
            if (e.target.innerText.includes('انگلیسی')) {
                document.getElementsByClassName('vjs-subs-caps-button')[1].lastChild.innerText = 'EN'
                document.getElementsByClassName('vjs-subs-caps-button')[1].lastChild.style.display = 'flex'
            }
            if (e.target.innerText.includes('خاموش')) {
                document.getElementsByClassName('vjs-subs-caps-button')[1].lastChild.style.display = 'none'
            }

        }
    }
    init() {

        document.getElementsByClassName('vjs-volume-panel vjs-control vjs-volume-panel-horizontal')[0].firstChild.lastChild.innerText = "۱۰۰";
        document.getElementsByClassName('vjs-volume-panel vjs-control vjs-volume-panel-horizontal')[0].firstChild.lastChild.classList.add("show-volume");
        document.getElementsByClassName('vjs-text-track-settings')[0].classList.add('menu_setting');
        document.getElementsByClassName('vjs-menu')[4].classList.add('my_menu');
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
        document.getElementsByClassName('vjs-subs-caps-button')[1].lastChild.innerText = '';
        document.getElementsByClassName('vjs-subs-caps-button')[0].lastChild.classList.add('hidden_setting');
    }
    render() {
        return (
            <div ref={elem => this.nv = elem}>
                <video id="my-video" className="video-js vjs-big-play-centered vjs-filmgardi fullscreen"
                    controls preload="none" poster='http://video-js.zencoder.com/oceans-clip.jpg'

                    data-setup='{ "aspectRatio":"640:310","language": "fa", "playbackRates": [1, 1.5, 2]},"fluid": true'>
                    <source src="https://filmgardi.arvanvod.com/0ROz04zBny/f008f77e37e23ac52e2425a45ac60fb8/1580750139/Nmw9BZ9K4Y/h_,360_400,480_800,720_1500,1080_3000,k.mp4.list/master.m3u8?secure=true" type='application/x-mpegURL' />
                    {/* <source src="https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8" type='application/x-mpegURL' /> */}
                    <track src="https://filmgardi.arvanvod.com/0ROz04zBny/f923268ca757d907bb90bafb7e6d370c/1580670305/Nmw9BZ9K4Y//fa_5IOiu7JrmRQv4TmaT9SDI8TyT5hUMTgseMQs2zhN.vtt" kind="captions" srclang="fa" label="انگلیسی"></track>
                    <track src="https://www.iandevlin.com/html5test/webvtt/upc-video-subtitles-en.vtt" kind="captions" srclang="fa" label="فارسی"></track>

                </video>
            </div>
        )
    }
}

export default Index2