import React from 'react'

function Test(props) {
    console.log('Test.prototype', Test.prototype);
    console.log('Test.defaultProps', Test.defaultProps);
    console.log('Test.length', Test.length);
    console.log('Test.name', Test.name);
    return (
        <>
            <div>{["Hello ", <span>World</span>, "!"]}</div>
            <div>Hi {props.name}</div>
        </>
    )
}
Test.defaultProps = {
    name: "Guest"
};
///////////////////////////////////////////////

class Test2 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    handleEvent({ type }) {
        switch (type) {
            case "click":
                return require("./mySwiper")(/* action dates */)
            case "mouseenter":
                return this.setState({ hovered: true })
            case "mouseleave":
                return this.setState({ hovered: false })
            default:
                return console.warn(`No case for event type "${type}"`)
        }
    }
    render() {
        return (
            <></>
        )
    }
}

export default Test2