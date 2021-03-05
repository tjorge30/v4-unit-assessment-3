import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Shelf from './Shelf';
import data from '../data'


export default class BookList extends Component {
    constructor() {
        super();
        this.state = { 
            data: data,
            books: [],
            shelf: []
         }
    }

    addToShelf() {

    }

    clearShelf() {

    }

    filterBooks(){

    }

    reset () {

    }

    render() { 
        return (
          <div>
            <section className='searchBarArea'>
            < SearchBar/>
            </section>
            <section className='bookArea'>
            <h1>this is booklist</h1>
                <div className='listArea'>

                </div>
                <div>
                < Shelf/>
                </div>
            </section> 
          </div>
         );
    }
}
 
