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
    
         this.addToShelf = this.addToShelf.bind(this);
         this.clearShelf = this.clearShelf.bind(this);
    }


    addToShelf(book) {
        this.setState({
            shelf: [...this.state.shelf, book.title]
        })
    }
        

    clearShelf() {
        //when button 'clear' is pushed the shelf array is set to empty array.
        this.setState({
            shelf: []
        })
    }

    // filterBooks(){

    // }

    // reset () {

    // }

    render() { 
        const bookShelf = this.state.data.map(element => {
            return <img alt='bookcover' src={element.img} onClick={() => this.addToShelf(element)}/>
        })
        return (
            <div>
                <div className='searchBarArea'>
                        < SearchBar/>
                </div>
               <section className='bookArea'>
                    <div className='books'>
                        {bookShelf}
                        
                    </div>
        
                    <div className='shelfArea'>
                    <div className='shelf'>
                        <p>Your Shelf!</p>
                        <button onClick={this.clearShelf}>Clear Shelf</button>
                    </div>
                        <Shelf shelfList = {this.state.shelf}/>
                    </div>
                </section> 
          </div>
         );
    }
}
 
