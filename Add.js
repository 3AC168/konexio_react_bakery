import React from 'react';
import Button from './core/Button';
import Slider from './core/Slider';
import 'rc-slider/assets/index.css';
class Add extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: "",
            price: 1
        }
        this.onChangInput = this.onChangInput.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }  
    
    onChangeInput(evt) {
        console.log('cpm/Add#onChangeInput has been called');
        console.log('cpm/Add#onChangeInput evt', evt);
        console.log('cpm/Add#onChangeInput evt', evt.target);
        console.log('cpm/Add#onChangeInput evt', evt.target.value);
        const input = evt.target.value;
        this.setState({
            input            
        })
        
    }

    onChangePrice(price){
        console.log('cpm/Add#onChangePrice has bee called');
        console.log('cpm/Add#onChangePrice evt', evt);
        console.log('cpm/Add#onChangePrice evt', evt.target);
        console.log('cpm/Add#onChangePrice evt', evt.target.value);
        this.setState({
            price
        })
        
    }


   

    onSubmit(){  
        console.log('cmp/Add#onSubmit has been called');
        console.log('cmp/Add#onSubmit this.state', this.state);
        const {
            input, 
            price
        } = this.state 

        this.props.onSubmit(input, price);
        
    }   


   render(){
        console.log('cmp/Add#render this.props', this.props)
        const {
            price
        } = this.state;
        return(            
        <div>
            <input placeholder="Item" 
            onChange={this.onChangeInput} />
            <Slider 
                min={1}
                max={10}
                value={this.onChangePrice}
            />
            <Button onClick={() => this.props.onSubmit()}>Add</Button>
        </div>
        );
    }
}

export default Add;

/* après
        <div = className="container">
           <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="item" aria-describedby="text-button"/>
                <div className="input-group-append">
                    <button 
                        type="button"
                        className="btn btn-primary mb-2"
                        onSubmit={this.props.onClickTAbAdd}>
                        Add
                    </button>
                </div>
            </div>
            <div className="container">
                <label forname="rc-slider">1€</label>
                <RCSlider                 
                    min={this.props.min}
                    max={this.props.max}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        </div>
<label for="intervalle">1 €</label>
<input type="range" class="form-control-range" id="intervall"></input>

<RCSlider 
                min={this.props.min}
                max={this.props.max}
                value={this.props.value}
                onChange={this.props.onChange}
                />


*/