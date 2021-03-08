import React, { Component } from 'react';


export default class Shelf extends Component {
    constructor (props){
        super(props)
    }
      render() {
          let updateShelf = this.props.shelfList.map(element => {
          return <li>{element}</li>
          })
       return(
       <div className='shelfTitles'>
           <ul>
                {updateShelf}
            </ul>
       </div>
       )}
    }

//function component that can get to the shelf 
//property and the clearShelf method.