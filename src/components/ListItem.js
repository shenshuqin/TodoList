import React, {Component} from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props)
        this.handleDeleItem = this.handleDeleItem.bind(this)
        this.state = {

        }
    }
    handleDeleItem (index) {
        this.props.deleItem(index)
    }
    render () {
        const {list}= this.props;
        return (
            <div className="undo-list">
            <div className="undo-list-title">
                正在进行
                <div id="count" className="undo-list-count">{list.length}</div>
            </div>
            
            <ul className="undo-list-ul">
                {
                    list.map((item,index)=>{
                    return (
                        <li id="list" key={index} className="undo-list-item" >
                            {item}
                            <div className="deleted" onClick = {(index)=>this.handleDeleItem(index)}>del</div>
                        </li>
                    )
                    })
                }
            </ul>
        </div> 
        )
    }
}
export default ListItem