import React, { Component } from 'react'
// import { Form } from 'semantic-ui-react'
// import '../index.css'

export default class ItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      description: '',
      status: 'todo'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      description: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.createItem(this.state)
    this.setState({
      description: ''
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          New to do list item:
          <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}