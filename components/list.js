import React from 'react';
import Item from './item';

export default class List extends React.Component {
    render () {
        return (
            <ul>
                { this.props.products.map(function (pro, i) {
                    return( <Item key={pro.id} id={pro.id} name={pro.name} description={pro.description} /> )
                }) }
            </ul>
        )
    }
}