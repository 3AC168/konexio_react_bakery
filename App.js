import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';


class App extends React.Component {

  constructor(props) {
    super(props); 
    
    this.state = {
      activeTab: "add",
      items: [{/*
        input:'coffee', 
        price: 2
      }, {
        input: 'cake',
        price: 10
      */}]
    }

    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
  }
  //Ici est difficile pour moi
  onAdd(input, price){
    console.log('App#onAdd');
    console.log('App#onAdd inout', input);
    console.log('App#onAdd price', price);
    let items = this.state.items;
    items.push({
      input,
      price
    });

    this.setState({
      items
    });

    this.setState({
      activeTab: 'List'
    })

    // go to other page
  }

  onClickTabAdd() {
    console.log('App#onClickTabAdd');
    this.setState({
      activeTab: "add"
    })
  }

  onClickTabList() {
    console.log('App#onClickTabList');
    this.setState({
      activeTab: "list"
    })
  }
  
  onClickTabPay() {
    console.log('App#onClickTabPay');
    this.setState({
      activeTab: "pay"
    })
  }

  
// partie sub-render  
renderTabAdd() {
  if (this.state.activeTab === 'add') {
    //console.log('#renderTabAdd going to null');
    return(
        <Add onSubmit={this.onAdd}/>
    );
  }
  //console.log('#renderTabAdd going to <Add /> cmp')
  return null;
}

  renderTabList() {
    if (this.state.activeTab === 'list') {
      //console.log('#renderTabList going to null');
      return(
          <List items={this.state.items}/>
      );
    }
    //console.log('#renderTabAdd going to <List /> cmp')
    return null;
  }

  renderTabPay() {
    if (this.state.activeTab === 'pay') {
      //console.log('#renderTabPay going to null');
      return(
          <Pay />
      );
    }
    //console.log('#renderTabAdd going to <Pay /> cmp')
    return null;
  }
  

// render normal
  render() {
    const {
      activeTab,  
      items
    } = this.state;    
    return (
      <div className="container">
        <div className="row">
          <Button 
            isSelected={this.state.activeTAb === 'add'}
            onClick={this.onClickTabAdd}>
            Add
          </Button>
          <Button 
            isSelected={this.state.activeTab === 'list'}
            onClick={this.onClickTabList}>
            List
            </Button>
          <Button 
            isSelected={this.state.activeTAb === 'pay'}
            onClick={this.onClickTabPay}>
            Pay
          </Button>
        </div>
                 
          {/*</div>this.renderTabAdd()}         
          {this.renderTabList()}
          {this.renderTabPay()*/}
          {/* {activeTab === 'add' ? <Add /> : null}
          {activeTab === 'add' ? <Add /> : null}
          {activeTab === 'add' ? <Add /> : null} */}
          {activeTab === 'add' && <Add onSubmit={this.onAdd} />}
          {activeTab === 'list' && <List item={items} />}
          {activeTab === 'pay' && <Pay />}
          
      </div>          
    );
  }
}

export default App;

/*<Add onAdd={this.onAdd}>
{this.state.toAddTab} ou {this.state.toInputString} // ça double le barre
</Add>*/
//<Button Add = {()=>this.activeTab}></Button>


