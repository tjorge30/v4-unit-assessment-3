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


    addToShelf(index) {
        //when a book is clicked add title to shelf.
    //     this.props.add(this.state.shelf);
    // this.setState({ shelf: "" });
        alert ('book was clicked')
          }
        

    clearShelf() {
        //when button 'clear' is pushed the shelf array is cleared.
        this.setstate({
            shelf: []
        })
    }

    // filterBooks(){

    // }

    // reset () {

    // }

    render() { 
       
        return (
            <div>
                <div className='searchBarArea'>
                        < SearchBar/>
                </div>
               <section className='bookArea'>
                    <div className='books'>
                        <img alt='bookcover' src={data[0].img} onClick={this.addToShelf}/>

                        <img alt='bookcover' src={data[1].img} onClick={this.addToShelf}/>
                        
                        <img alt='bookcover' src={data[2].img} onClick={this.addToShelf}/>
                        
                        <img alt='bookcover' src={data[3].img} onClick={this.addToShelf}/>
                        
                        <img alt='bookcover' src={data[4].img} onClick={this.addToShelf}/>
                        
                        <img alt='bookcover' src={data[5].img} onClick={this.addToShelf}/>
                        
                        <img alt='bookcover' src={data[6].img} onClick={this.addToShelf}/>
                        
                        <img alt='bookcover' src={data[7].img} onClick={this.addToShelf}/>
                        
                        <img alt='bookcover' src={data[8].img} onClick={this.addToShelf}/>
                        
                        <img alt='bookcover' src={data[9].img} onClick={this.addToShelf}/>
                        
                        <img alt='bookcover' src={data[10].img} onClick={this.addToShelf}/>
                        
                        <img alt='bookcover' src={data[11].img} onClick={this.addToShelf}/>
                        
                    </div>
        
                    <div className='shelfArea'>
                        <Shelf/>
                    </div>
                </section> 
          </div>
         );
    }
}
 
