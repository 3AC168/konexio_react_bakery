import React from 'react';
import Specimen from 'src';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            source: "specimen"
        }
    }

    let url = 'http://konexio.codiscovery.co/bakery/api/?q=croissant';    
    fetch(url, {
        method: 'GET'(img),
   
    });

    render(){
        return(
            <div>
                <button img src="specimen.jpg" />
                <p>{this.props.onClickFn}</p>
            </div>
        );
    }
}

export default Card;