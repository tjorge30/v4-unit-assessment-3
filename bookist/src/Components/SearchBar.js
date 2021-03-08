import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userInput: '',
         }
    }

    handleChange(value) {
            this.setState({ userInput: value });    
    }

    render(props) { 
        let booksToDisplay = [];
        return ( 
            <section>
            <input onChange={e => this.handleChange(e.target.value)} type="text"></input>
            <button>Search</button>
            <button>Clear Search</button>
            </section>
         );
    }
}

//  state: {
//   userInput: string
//  }
//  props:{
//  filterBooks: funtion,
//  reset: function  
//  }
//  methods:
// -handleChange
// -handleClick
// -handleClear