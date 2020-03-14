import React, { Component } from 'react';
import './kids.css';
// import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper/js/swiper.esm';
import FGSwiper from './mySwiper';
import ImageList from './imageList'
const kids = [
    { url: 'images/filshah.png', title: 'kids' },
    { url: 'images/incredibles.png', title: 'kids' },
    { url: 'images/insideout.png', title: 'kids' },
    { url: 'images/minion.png', title: 'kids' },
    { url: 'images/rafael.png', title: 'kids' },
    { url: 'images/filshah.png', title: 'kids' },
    { url: 'images/incredibles.png', title: 'kids' },
    { url: 'images/insideout.png', title: 'kids' },
    { url: 'images/minion.png', title: 'kids' },
    { url: 'images/rafael.png', title: 'kids' },
    { url: 'images/filshah.png', title: 'kids' },
    { url: 'images/incredibles.png', title: 'kids' },
    { url: 'images/insideout.png', title: 'kids' },
    { url: 'images/minion.png', title: 'kids' },
    { url: 'images/rafael.png', title: 'kids' },
]
const children = [
    {
        "title": "پادشاه",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/the-king.jpg",
        "alias": "/9120",
        "is_serial": false,
        "product_status": []
    },
    {
        "title": "چ: قسمت اول",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/Che-Part-One.jpg",
        "alias": "/4e25",
        "is_serial": false,
        "product_status": []
    },
    {
        "title": "آشوب",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/%D8%A2%D8%B4%D9%88%D8%A8.jpg",
        "alias": "/a904",
        "is_serial": true,
        "product_status": []
    },
    {
        "title": "عمر مختار",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/Lion%20of%20the%20Desert_0.jpg",
        "alias": "/a6c0",
        "is_serial": false,
        "product_status": []
    },
    // {
    //     "title": "یتیم‌ خانه ایران‏ ",
    //     "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/5213b875445e6bf07258a72cfb9c2ecee44240d8.jpg",
    //     "alias": "/a3a8",
    //     "is_serial": false,
    //     "product_status": []
    // },
    {
        "title": "استرداد",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/ad3da25660ef972d298e03e9738e7fd45408b17a.jpg",
        "alias": "/9e88",
        "is_serial": false,
        "product_status": []
    },
    {
        "title": "پادشاه قانون شکن",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/473626ea604732f35211b2bc8307f41b89eb49ec.jpg",
        "alias": "/a785",
        "is_serial": false,
        "product_status": []
    },
    {
        "title": "تاریک ترین ساعت",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/a8bb828d78af5145d53a1c133c032c4673d2a188.jpg",
        "alias": "/6c44",
        "is_serial": false,
        "product_status": []
    },
    {
        "title": "پادشاه",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/the-king.jpg",
        "alias": "/9120",
        "is_serial": false,
        "product_status": []
    },
    {
        "title": "چ: قسمت اول",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/Che-Part-One.jpg",
        "alias": "/4e25",
        "is_serial": false,
        "product_status": []
    },
    {
        "title": "آشوب",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/%D8%A2%D8%B4%D9%88%D8%A8.jpg",
        "alias": "/a904",
        "is_serial": true,
        "product_status": []
    },
    {
        "title": "عمر مختار",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/Lion%20of%20the%20Desert_0.jpg",
        "alias": "/a6c0",
        "is_serial": false,
        "product_status": []
    },
    {
        "title": "یتیم‌ خانه ایران‏ ",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/5213b875445e6bf07258a72cfb9c2ecee44240d8.jpg",
        "alias": "/a3a8",
        "is_serial": false,
        "product_status": []
    },
    {
        "title": "استرداد",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/ad3da25660ef972d298e03e9738e7fd45408b17a.jpg",
        "alias": "/9e88",
        "is_serial": false,
        "product_status": []
    },
    {
        "title": "پادشاه قانون شکن",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/473626ea604732f35211b2bc8307f41b89eb49ec.jpg",
        "alias": "/a785",
        "is_serial": false,
        "product_status": []
    },
    {
        "title": "تاریک ترین ساعت",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/a8bb828d78af5145d53a1c133c032c4673d2a188.jpg",
        "alias": "/6c44",
        "is_serial": false,
        "product_status": []
    },
    {
        "title": "پادشاه",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/the-king.jpg",
        "alias": "/9120",
        "is_serial": false,
        "product_status": []
    },
    {
        "title": "چ: قسمت اول",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/Che-Part-One.jpg",
        "alias": "/4e25",
        "is_serial": false,
        "product_status": []
    },
    {
        "title": "آشوب",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/%D8%A2%D8%B4%D9%88%D8%A8.jpg",
        "alias": "/a904",
        "is_serial": true,
        "product_status": []
    },
    {
        "title": "عمر مختار",
        "poster": "https://ghatreh.filmgardi.com/sites/default/files/images/poster/1398/Lion%20of%20the%20Desert_0.jpg",
        "alias": "/a6c0",
        "is_serial": false,
        "product_status": []
    },

]
class Kids extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: true,
            items: children,
            width_img: 0,
            height_img: 0,
            update: false,
        }
        this.swiper = {
            // direction: "horizontal",
            // grabCursor: true,
            slidesPerView: 6.5,
            slidesPerGroup: 5,
            loop: true,
            loopedSlides: 1000,
            // spaceBetween: 0,
            // preloadImages: false,
            // Enable lazy loading
            // lazy: true,
            speed: 1000,
            // autoHeight:true,
            // effect:'coverflow',
            // width:1850,
            // setWrapperSize:true,
            observer: true,
            // slidesOffsetBefore: 25,
            // slidesOffsetAfter: 100,
            // watchOverflow:true,
            centerInsufficientSlides: true,
            paginationClickable: true,
            breakpoints: {
                // when window width is >= 320px

                // when window width is >= 640px
                320: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                    slidesPerGroup: 2,
                    speed: 200
                },

                540: {
                    slidesPerView: 2.5,
                    spaceBetween: 0,
                    slidesPerGroup: 2,
                    speed: 300
                },
                767: {
                    slidesPerView: 3.5,
                    spaceBetween: 0,
                    slidesPerGroup: 3,
                    speed: 500
                },
                1000: {
                    slidesPerView: 4.5,
                    spaceBetween: 0,
                    slidesPerGroup: 4,
                    speed: 600
                },
                1400: {
                    slidesPerView: 5.5,
                    spaceBetween: 0,
                    slidesPerGroup: 5,
                    speed: 800
                },
                1600: {
                    slidesPerView: 6.5,
                    spaceBetween: 0,
                    slidesPerGroup: 6,
                }
            },


        }
    }
    componentDidMount() {

        this.setState({ width_img: document.getElementsByClassName('item_poster')[0].offsetWidth });
        this.setState({ height_img: document.getElementsByClassName('item_poster')[0].offsetHeight });
        window.addEventListener('resize', () => {
            this.setState({ width_img: document.getElementsByClassName('item_poster')[0].offsetWidth });
            this.setState({ height_img: document.getElementsByClassName('item_poster')[0].offsetHeight });
        });
    }
    render() {

        return (
            <>
                <FGSwiper config={this.swiper} content={kids} />
                <div className='list_items'>
                    {
                        this.state.isLoaded ?
                            <ImageList items={this.state.items}
                                width_img={this.state.width_img} height_img={this.state.height_img} />
                            : null
                    }
                </div>
            </>
        )
    }
}

export default Kids