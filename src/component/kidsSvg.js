import React, { PureComponent } from 'react'

class KidsSvg extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            initial_radius: {
                y: 7.5,
                init_y: 7.5,
                radius: 29,
                init_radius: 29,
            },
            top_right_radius_x: 12.5,
            init_top_right_radius_x: 12,
            top_curve: 3,
            init_top_curve: 3,
            top_right_curve_y: 16,
            init_top_right_curve_y: 16,
            top_right_curve_x: 9,
            init_top_right_curve_x: 9,
            top_left_curve_y: 14,
            init_top_left_curve_y: 14,
            bottom_right_radius_x: 18,
            init_bottom_right_radius_x: 18,
            bottom_right_radius_y: 12,
            init_bottom_right_radius_y: 12,
            bottom_left_radius_x: 10,
            init_bottom_left_radius_x: 10,
            bottom_left_radius_y: 6,
            init_bottom_left_radius_y: 6,
            top_left_radius_x: 10,
            init_top_left_radius_x: 10,
            top_left_radius_y: 10,
            init_top_left_radius_y: 10,
            top_left_line: 7,
            init_top_left_line: 7,
            bottom_right_line: 12,
            init_bottom_right_line: 12,
            right_vertical_line: 0,
        }
    }
    componentDidMount() {
        console.log('hi')
        const init_width = 184;
        this.init(init_width);
        window.addEventListener('resize', () => {
            // let width = window.innerWidth;
            // if (width === 320 || width === 360 || width === 375 || width === 414 || width === 480 ||
            //     width === 568 || width === 600 || width === 640 || width === 667 || width === 720 ||
            //     width === 768 || width === 800 || width === 812 || width === 823 || width === 1024 ||
            //     width === 1280 || width === 1360 || width === 1400 || width === 1440 || width === 1600 ||
            //     width === 1680 || width === 1824 || width === 1920 || width === 2048 || width === 2160 ||
            //     width === 2304 || width === 2560 || width === 2732 || width === 2880 || width === 2960 ||
            //     width === 3000 || width === 3200 || width === 3800) {
            //     this.init(init_width);
            // }
            this.init(init_width);
        });
    }
    init(init_width) {
        let w = document.getElementsByClassName('item_poster')[0].offsetWidth;
        let new_y = (this.state.initial_radius.init_y * w) / init_width;
        let new_radius = (this.state.initial_radius.init_radius * w) / init_width;
        let new_top_right_radius_x = (this.state.init_top_right_radius_x * w) / init_width;
        let new_top_curve = (this.state.init_top_curve * w) / init_width;
        let new_top_right_curve_y = (this.state.init_top_right_curve_y * w) / init_width;
        let new_top_right_curve_x = (this.state.init_top_right_curve_x * w) / init_width;
        let new_top_left_curve_y = (this.state.init_top_left_curve_y * w) / init_width;
        let new_bottom_right_radius_x = (this.state.init_bottom_right_radius_x * w) / init_width;
        let new_bottom_right_radius_y = (this.state.init_bottom_right_radius_y * w) / init_width;
        let new_bottom_left_radius_x = (this.state.init_bottom_left_radius_x * w) / init_width;
        let new_bottom_left_radius_y = (this.state.init_bottom_left_radius_y * w) / init_width;
        let new_top_left_radius_x = (this.state.init_top_left_radius_x * w) / init_width;
        let new_top_left_radius_y = (this.state.init_top_left_radius_y * w) / init_width;
        let new_top_left_line = (this.state.init_top_left_line * w) / init_width;
        let new_bottom_right_line = (this.state.init_bottom_right_line * w) / init_width;
        this.setState(prevState => ({
            initial_radius: {
                ...prevState.initial_radius,
                y: new_y,
                radius: new_radius,
            },
            top_right_radius_x: new_top_right_radius_x,
            top_curve: new_top_curve,
            top_right_curve_y: new_top_right_curve_y,
            top_right_curve_x: new_top_right_curve_x,
            top_left_curve_y: new_top_left_curve_y,
            bottom_right_radius_x: new_bottom_right_radius_x,
            bottom_right_radius_y: new_bottom_right_radius_y,
            bottom_left_radius_x: new_bottom_left_radius_x,
            bottom_left_radius_y: new_bottom_left_radius_y,
            top_left_radius_x: new_top_left_radius_x,
            top_left_radius_y: new_top_left_radius_y,
            top_left_line: new_top_left_line,
            bottom_right_line: new_bottom_right_line,
        }));
    }
    render() {
        let { poster } = this.props.item;
        let index = this.props.index;
        let width_img = this.props.width_img
        let height_img = this.props.height_img
        return (
            <svg className="svg" version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid    slice" height={`${height_img}`}>
                <defs preserveAspectRatio="xMidYMid    slice" >
                    <pattern id={`img${index}`} patternUnits="userSpaceOnUse"
                        width="100%" height='100%'
                        preserveAspectRatio="xMidYMid    slice">
                        <image href={poster} x="0" y="0" width="100%" height='100%'
                            preserveAspectRatio="xMidYMid  slice" />
                    </pattern>

                </defs>
                <path d={`M ${this.state.initial_radius.radius}  ${this.state.initial_radius.y}
                Q${width_img / 2} -${this.state.initial_radius.y}
                 ${width_img - this.state.initial_radius.radius} ${this.state.initial_radius.y + this.state.top_curve} 
                Q${width_img - this.state.top_right_radius_x} ${this.state.top_right_curve_y} 
                ${width_img - this.state.top_right_curve_x} ${this.state.initial_radius.y + this.state.initial_radius.radius} 
                Q${width_img + this.state.right_vertical_line} ${(height_img / 2)} 
                ${width_img - this.state.bottom_right_line} ${height_img - this.state.initial_radius.radius - 6} 
                Q${width_img - this.state.bottom_right_radius_x} ${(height_img - this.state.bottom_right_radius_y)} 
                ${width_img - this.state.initial_radius.radius - 10} ${height_img - 6} 
                Q${(width_img / 2) + 5} ${height_img} 
                ${this.state.initial_radius.radius + 10} ${height_img - 3.5} 
                Q${this.state.bottom_left_radius_x} ${height_img - this.state.bottom_left_radius_y}
                4.5 ${height_img - this.state.initial_radius.radius - 6} 
                Q-1.5 ${height_img / 2}
                ${this.state.top_left_line} ${this.state.initial_radius.radius + 6}
                Q${this.state.bottom_left_radius_x} ${this.state.top_left_curve_y}
                ${this.state.initial_radius.radius}  ${this.state.initial_radius.y} `
                }
                    fill={`url(#img${index})`} filter="url(#dropshadow)" />
            </svg>
        )
    }
}

export default KidsSvg