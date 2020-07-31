import React from 'react';


//function ItemList(props) {
//    const input = props.inputs;
//    const listItems = input.map((input) =>
//    <li key={input.toString()}>
//        {input}
//    </li>
//    )
class List extends React.Component {
    render(){
        const {
            items
        } = this.props;
        console.log('cmp/List#render this.props.items', this.props.items);
        console.log('cmp/List#render this.props.items[0]', this.props.items[0]);
        return(
            <div>
                <ul>
                    {/*<li>{this.props.item[0].input} - {this.props.item[0].price}</li>*/}
                    {this.props.items.map((item, index) => {
                        console.log('item', item);
                        console.log('index', index)
                        return (
                            <li key={index}>
                                {item.input} - {item.price} €
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default List; 