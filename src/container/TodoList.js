import React, {Component} from 'react';

import Header from '../components/Header'
import ListItem from '../components/ListItem'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.addUndoItem = this.addUndoItem.bind(this)
        this.deleItem = this.deleItem.bind(this)
        this.state = {
            undoList : ['爱数']
        }
    }
    addUndoItem (value) {
        this.setState({
            undoList : [...this.state.undoList,value]
        })
    }
    deleItem(index){
        const newList = [...this.state.undoList]
        newList.splice(index,1);
        this.setState({
            undoList:newList
        })
    }
    render () {
        const {undoList} = this.state
        return (
            <div>
                <Header addUndoItem = {this.addUndoItem} />
                <ListItem list = {undoList} deleItem = {this.deleItem} />
            </div>
        )
    }
}
export default TodoList