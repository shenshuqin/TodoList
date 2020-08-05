import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputKeyup = this.handleInputKeyup.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.state = {
            value : ''
        }
    }
    handleInputChange (e) {
        this.setState({
            value : e.target.value
        })
    }
    handleInputKeyup (e) {
        const { value } = this.state
        if(e.keyCode === 13 && value) {
            this.props.addUndoItem(value)
        }
    }
    handleAdd () {
        const { value } = this.state
        value && this.props.addUndoItem(value)
    }
    render () {
        const {value} = this.state;
        return (
            <div className="header">
            <div className="header-content">
               <span> TodoList </span>
                <input 
                    id="input" 
                    value = {value}  
                    className="header-input" 
                    onChange = {this.handleInputChange} 
                    onKeyUp = {this.handleInputKeyup}/>
                <div className="add" onClick = {this.handleAdd}>add</div>
            </div>
        </div> 
        )
    }
}
export default Header