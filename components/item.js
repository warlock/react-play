import React from 'react';

export default class Item extends React.Component {
    render() {
        return (
        	<li><b>{this.props.id}</b> - {this.props.name} - {this.props.description}</li>
        )
    }
}