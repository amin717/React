import React, { Component } from 'react';
import KidsSvg from './kidsSvg';
import './serialKids.css';
import LogoKids from './logoKids';
const kids =
{
    typography: [
        { url: 'images/angry birds typegraphi.png' },
    ],
    background: [
        { url: 'images/angry-birds-background-shadow.png' },
    ],
    logo: [
        { url: 'images/angry bird.png' },
    ],
    color: '#CC2E3E',
}


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
class SerialKids extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: true,
            items: children
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
            <div className='content'>
                <div className="background_image"></div>
                <LogoKids items={kids} />
                <div className='list_items'>
                    {this.state.isLoaded ? (
                        this.state.items.map((item, index) => {
                            const { poster, title } = item;
                            return (
                                <div className="item">
                                    <div className="item_poster">
                                        <a href="#">
                                            <img src={(`${poster}`)} alt={title} className='fake_img' />
                                            <KidsSvg width_img={this.state.width_img} height_img={this.state.height_img} item={item} index={index} />
                                        </a>
                                        {/* <div class="swiper-lazy-preloader"></div> */}
                                    </div>
                                    <div className="item_title">
                                        <p > {title}</p>
                                    </div>
                                </div>
                            );
                        })
                    ) : null}
                </div>
                

            </div>
        )
    }
}

export default SerialKids