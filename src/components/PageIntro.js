import React, { Component } from 'react';

class PageIntro extends Component {
    render() {
        return <div className="center">
            <div className="container">
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
                {this.props.children}
            </div>
        </div>
    }
}

export default PageIntro;