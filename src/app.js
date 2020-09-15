import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);

        this.state ={
            newItem:"",
            list:[]
        }

    }
    updateInput(key, value){
        this.setState({
            [key]:value
        });
    }
    addItem(){
        //create item with unique Id
        const newItem ={
        id: 1+ Math.random(),
        value: this.state.newItem.slice()
        };
        //copy of current list of items
        const list = [...this.state.list];
        //add new items to list
        list.push(newItem);

        //updsting state with new list and rest newitem input
        this.setState({
            list,
            newItem:''
        });

    }
    deleteItem(id){
        //copy current list of items
        const list =[...this.state.list];

        //filter out item bein deleted
        const updatedLiist = list.filter(item =>item.id!== id);

        this.setState({list: updatedLiist});
    }

    render() {

        return (
            
            
            <div className='App'>
            <div className='content' >
                <h2>Hi! What are your plans today? </h2>
              <br />
                <input type='text' placeholder ='Type items here' value ={this.state.newItem} onChange ={e => this.updateInput('newItem', e.target.value)}/>
                    <button onClick= {() => this.addItem()} className='addbuton'>
                          Add
                    </button>
                    <br/>
                    <ul>
                    {this.state.list.map( item => {
                        return (
                            <li key={item.id} >
                                {item.value}
                                <button onClick={()=> this.deleteItem(item.id)} className="delbuton">
                                    X
                                </button>
                            </li>
                        )
                    })}
                    
                    </ul>
            </div>
    
            </div>
         );
    }
}
 
export default App;