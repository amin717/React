import React, { Component } from 'react';
import './swiper.css';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

class FGSwiper extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hover: false,
            update: false
        }

    }
    componentDidMount() {
        this.init();
    }
    init() {
        const _config = this.props.config;
        const mySwiper = new Swiper('.swiper-container', {
            ..._config,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: _config.pagination ? {
                el: '.swiper-pagination',
                clickable: true,
            } : {},
        })
    }
    toggleHover() {
        //  debugger;
        document.getElementsByClassName('swiper-button-next')[0].style.opacity = this.state.hover ? "0" : "1";
        document.getElementsByClassName('swiper-button-prev')[0].style.opacity = this.state.hover ? "0" : "1";
        document.getElementsByClassName('swiper-button-next-hover')[0].style.opacity = this.state.hover ? "0" : "1";
        document.getElementsByClassName('swiper-button-prev-hover')[0].style.opacity = this.state.hover ? "0" : "1";
        if (document.getElementsByClassName('swiper-button-disabled')[0]!==undefined) {
            // debugger;
            document.getElementsByClassName('swiper-button-disabled')[0].style.opacity = this.state.hover ? "0" : "0.35";
        }

        this.setState({ hover: !this.state.hover })
    }
    render() {
        return (
            <div class="swiper-container"
                onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()}>
                <div class="swiper-wrapper"
                >
                    {this.props.content.map((image, index) => {
                        const { url, title } = image
                        return (
                            <div className="swiper-slide" key={index}>
                                <a href="#"><img src={url} alt={title} /></a>
                            </div>
                        )
                    }
                    )
                    }
                </div>
                <div className="swiper-pagination" ></div>
                <div className="swiper-button-next-hover">
                    <div className="swiper-button-next" ></div>
                </div>
                <div className="swiper-button-prev-hover">
                    <div className="swiper-button-prev" ></div>
                </div>
            </div>
        )
    }
}

export default FGSwiper