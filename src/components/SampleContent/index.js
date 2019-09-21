import React, { Component } from 'react';

class SampleContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.content}</h1>
            </div>
        )
    }
}

export default SampleContent;