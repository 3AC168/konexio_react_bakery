import React from 'react';
import Card from './components/product';

class Pay extends React.Component {
    constructor(props){
        super(props);
        state = {
            basket: [],
            total: 0,
            totalVat: 0,
            totalEcoTax: 0
        }
    }

    onClickProduct(name, price) {
        calculateTotal() {
            const ecoTax = 0.03;
            const tva = 0.2;
            const total = basket.price ;
            const totalAfterTax = total + basket.length * ecoTax + total * tva;  

            this.setState({
                total: total 
            });

            this.calculateTotal();
        }
         
    }
  

    render(){
        console.log('cmp/Pay#render this.props', this.props)
        return(
            <div>
                Pay
                <div>{this.state.total}</div>
                <Card> 
                    onAdd={() => this.onAdd.item}
                    onClickFn={() => this.onAdd.price}
                    console.log('cpm/Pay#render this.state', this.state)
                </Card>
            </div>
        );
    }
}

export default Pay;