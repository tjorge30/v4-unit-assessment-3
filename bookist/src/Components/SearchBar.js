import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = { 
            userInput: '',
         }
    }
    render() { 
        return ( 
            <section>
            <h1>this is search bar</h1>
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