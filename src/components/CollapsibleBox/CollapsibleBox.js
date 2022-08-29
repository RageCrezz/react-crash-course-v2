import React, { Component } from "react";
import "./styled/collapsible-box.scss";

export default class Collapsible extends Component {
    state = { opened: false }

    render() {
        return <div className="collapse-box">
            <div className="box-header" onClick={() => this.setState({ opened: !this.state.opened })}>
                <h2>{this.props.headerText}</h2>
            </div>
            <div className="box-body" style={{ maxHeight: this.state.opened ? "128px": 0 }}>
                <p>{this.props.bodyText}</p>
            </div>
        </div>;
    }
}
