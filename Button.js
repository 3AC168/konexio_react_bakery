import React from 'react';

class Button extends React.Component {
    render () {
        console.log('cmp/Button#render this.props', this.props);
        let buttonClass = "btn-outline-primary";
        if (this.props.isSelected === 'true') {
            buttonClass = "btn-primary";
        }
        return(
            <button 
            className = {'btn $(btnClass}'}>
            {this.props.children}
            </button>
        );
    }
}

export default Button;

/*2
class Button extends React.Componet {
    render(){
        console.log('cmp/core/Button#render this.props', this.prop);
        const {
            isSelected,
            children,
            onClick
        } = this.props; 
        const btnClasses = ['btn'];
        btnClasses.push(isSelected ? 'btn-primary' : 'btn-outline-primary'); 
        return(
            <button 
                className={btnClasses.join(' ')}>
                {children}
            </button>
        );
    }
} 

export default Button; */

/*3 
const Button = ({ isSelected, onClick, children }) => {
    console.log('cmp/core/Butto#render isSelected', isSelected);
    console.log('cmp/core/Butto#render onClick', onClick);
    console.log('cmp/core/Butto#render children', children);
    const btnClasses = ['btn'];
    btnClasses;push(isSelected ? 'btn-primary' : 'btn-outline-primary');
    return(
        <button 
            className={btnClasses.join(' ')}
            onClick={onClick}
            {children}
        </button> 
    );
}

export default Button; */


/*
const Button =({children, isSelected, onClick}) => {
    console.log('cmp/Button isSelected', isSelected);
    console.log('cmp/Button onClick', onClick);
    //console.log('cmp/Button this.props', this/props); // class component
    //console.log('cmp/Button props', props); // fn component
    return(         
        <button
            type="button" 
            className="btn btn-outline-primary mb-2" id="show"
            onClick={onClick}>
            {children}
        </button>                             
    );    
}

export default Button; */

/*
    render(){
        return(
            <div className="container">
                <div className="btn" role="group">            
                    <button 
                        type="button" 
                        className="btn btn-outline-secondary mb-2"
                        onClickTabAdd={this.props.isSelected}>
                        Add
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-outline-secondary mb-2"
                        onClickTabList={this.props.isSelected}>
                        List
                    </button>
                    <button 
                        type="button"
                        className="btn btn-outline-secondary mb-2"
                        onClickTabPay={this.props.onClick}>
                        Pay
                    </button>
                </div>
                <div className="container">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="item" aria-describedby="text-button"/>
                        <div className="input-group-append">
                            <button 
                                type="button"
                                className="btn btn-primary mb-2"
                                onClick={this.props.onClickTabAdd}>
                                Add
                            </button>
                        </div>
                    </div>
                    <label for="intervalle">1 €</label>
                    <input type="range" class="form-control-range" id="intervall"></input>
                </div>
            </div>
        );
    }
}

export default Button; */