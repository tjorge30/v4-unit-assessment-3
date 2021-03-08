import React, { Component } from 'react';
import data from '../data';


export default class Shelf extends Component {
    constructor (props){
        super(props)
    }
      render() {
       return(
       <div className='shelf'>
           <p>Your Shelf!</p>
           <button>Clear Shelf</button>
       {/* <ul>{data[index].title.map(elem => <li>{elem}</li>)}</ul> */}
       </div>
       )}
    }

//function component that can get to the shelf 
//property and the clearShelf method.