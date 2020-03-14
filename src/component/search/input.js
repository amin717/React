import React, { Component } from 'react';
import { TimelineLite } from 'gsap/all';
import address from '../address';
// import CircularProgress from '@material-ui/core/CircularProgress';
import { Spin, Icon } from 'antd';
import 'antd/dist/antd.css';
import './input.css';
// let search_data = [];
let index = 1;
class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            loading: false,
            items: [],
            search: ""
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        const searchContainer = document.getElementById('search_container');
        if (searchContainer)
            searchContainer.addEventListener('scroll', this.handleScroll);
    }
    handleFocus() {
        this.setState({ isLoaded: true })
        let searchAnim = new TimelineLite()
            .to('.header', 0.5, { y: "-24.8vh" })

    }
    exitSearch() {
        let searchAnim = new TimelineLite()
            .to('.header', 0.5, { y: 0 })
    }
    handleSearch(e) {
        this.setState({ search: e.target.value }, () => {
            if (this.state.search === "") {
                this.setState({ items: [], loading: false });
                index = -1
            }
            else {
                this.setState({ loading: true, items: [] })
                fetch(`${address}_api/_v3/Contents/Products/filter?search=${this.state.search}`, {

                    method: 'GET',
                })
                    .then(res => res.json())
                    .then(
                        (result) => {
                            this.setState({ loading: false })
                            this.setState({
                                isLoaded: true,
                                items: result.body.result,
                            });
                            // debugger;
                        },
                        // Note: it's important to handle errors here
                        // instead of a catch() block so that we don't swallow
                        // exceptions from actual bugs in components.
                        (error) => {
                            // debugger
                            this.setState({
                                isLoaded: true,
                                error
                            });
                        }
                    )
            }
        })

        // this.setState({ loading: true });
        // document.getElementsByClassName('search_result')[0].style.opacity = 0;
        // if (index === 1) {
        //     setTimeout(() => {
        //         this.setState({ loading: false, items: data });
        //         if (document.getElementsByClassName('search_result')[0].childNodes[0]) {
        //             document.getElementsByClassName('search_result')[0].childNodes[0].style.display = 'flex';
        //             document.getElementsByClassName('search_result')[0].childNodes[1].style.display = 'flex';
        //             document.getElementsByClassName('search_result')[0].childNodes[2].style.display = 'flex';
        //             document.getElementsByClassName('search_result')[0].childNodes[3].style.display = 'flex';
        //             document.getElementsByClassName('search_result')[0].childNodes[4].style.display = 'flex';
        //             document.getElementsByClassName('search_result')[0].childNodes[5].style.display = 'flex';
        //             document.getElementsByClassName('search_result')[0].childNodes[10].style.display = 'flex';
        //             document.getElementsByClassName('search_result')[0].childNodes[11].style.display = 'flex';
        //             document.getElementsByClassName('search_result')[0].style.opacity = 1;
        //         }

        //         index = 2;
        //     }, 2000);
        // }
        // if (index === 2) {
        //     setTimeout(() => {
        //         this.setState({ loading: false });
        //         if (document.getElementsByClassName('search_result')[0].childNodes[0]) {
        //             document.getElementsByClassName('search_result')[0].childNodes[0].style.display = 'none';
        //             document.getElementsByClassName('search_result')[0].childNodes[1].style.display = 'none';
        //             document.getElementsByClassName('search_result')[0].childNodes[2].style.display = 'none';
        //             document.getElementsByClassName('search_result')[0].childNodes[3].style.display = 'none';
        //             document.getElementsByClassName('search_result')[0].childNodes[4].style.display = 'none';
        //             document.getElementsByClassName('search_result')[0].childNodes[5].style.display = 'none';
        //             document.getElementsByClassName('search_result')[0].childNodes[10].style.display = 'none';
        //             document.getElementsByClassName('search_result')[0].childNodes[11].style.display = 'none';
        //             document.getElementsByClassName('search_result')[0].style.opacity = 1;
        //         }

        //         index = reverse ? 1 : 3;
        //     }, 2000);
        // }
        // if (index === 3) {
        //     setTimeout(() => {
        //         this.setState({ loading: false });
        //         if (document.getElementsByClassName('search_result')[0]) {
        //             document.getElementsByClassName('search_result')[0].style.opacity = 0;
        //         }

        //         index = 2;
        //         reverse = true;
        //     }, 2000);
        // }

    }
    handleScroll(e) {
        // debugger;
        // console.log(e.target.scrollTop);
        let header = document.getElementById("mySearch");
        if (header.getBoundingClientRect().top < 10) {
            header.classList.add("sticky");
            document.getElementsByClassName('header')[0].style.zIndex = 10
            // debugger;
        }
        if (e.target.scrollTop < 150) {
            // debugger;
            header.classList.remove("sticky");
        }
    }
    render() {
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
        return (
            <div id="search_container" className='search_container' >
                <div id='mySearch' className="header">

                    <div className="search_input">
                        <input className='input' onFocus={() => { this.handleFocus() }}
                            onBlur={() => this.state.items === null ? this.exitSearch() : null}
                            onChange={(e) => { this.handleSearch(e) }}
                            placeholder="جستجوی فیلم، بازیگر، کارگردان و ...">
                        </input>
                        <div></div>
                        <span className="search_icon" />
                        <span
                            className="exit_icon"
                            onClick={() => {
                                document.getElementsByClassName('input')[0].value = "";
                                this.setState({ items: [] });
                                let searchAnim = new TimelineLite()
                                    .to('.header', 0.5, { y: 0 })
                                index = 1
                            }} />
                    </div>
                    <div className="close" onClick={() => { }}>
                        <span></span>
                        <span>بستن</span>
                    </div>
                </div>



                {this.state.loading &&
                    <Spin indicator={antIcon} />
                }
                <div className="gap"></div>
                <div className='search_result'>
                    {this.state.isLoaded && this.state.items !== null ? (
                        this.state.items.map(item => {
                            const { title, enTitle, body, poster } = item;
                            return (
                                <>
                                    <div className="search_info">
                                        <img src={(`${address}${poster[0].url}`)} alt="" />
                                        {/* <span style={{backgroundImage: `url(${address}${poster[0].url})`}}></span> */}
                                        <div className="search_item" key={title}>
                                            <p className="search_title"> {title}</p>
                                            <p className="search_title"> {enTitle}</p>
                                            <p className="search_body">{body}</p>
                                        </div>

                                    </div>
                                    <hr className="divider_line" />
                                </>
                            );
                        })
                    ) : null}
                </div>
            </div>
        )
    }
}

export default Input