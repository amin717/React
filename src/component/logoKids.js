import React, { Component } from 'react'
import './logoKids.css'
class LogoKids extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentDidMount() {
        // debugger;
    }
    render() {
        return (
            <div className="container">
                <div className="logo_kids" style={{ backgroundColor: this.props.items.color }}>
                    <div className="logo">
                        <img className="logo_img" src={(`${this.props.items.logo[0].url}`)} alt="" />
                    </div>
                    <div className="background_logo" style={{ backgroundImage: `url(${this.props.items.background[0].url})` }}>
                        <img className="background_logo_img" src={(`${this.props.items.typography[0].url}`)} alt="" />
                    </div>
                </div>
                {/* <div className="season">
                    <div className="logo">
                        <span>{`فصل ${1}`}</span>
                        <span>logo</span>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default LogoKids