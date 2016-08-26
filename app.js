import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list'

var products = [
        { "id": "222", "name": "333", "description": "444" },
        { "id": "610", "name": "15", "description": "1.99"}
];

ReactDOM.render(<List products={products} />, document.getElementById('container'));