import React, { Component } from 'react';
import TodoLane from '../TodoLane/TodoLane'
import DoingLane from '../DoingLane/DoingLane'
import DoneLane from '../DoneLane/DoneLane'
import ItemForm from '../ItemForm/ItemForm';
import styles from './MainContainer.module.css'

export default class MainContainer extends Component {
  constructor(){
    super()
    this.state = {
      items: [
        { description: 'Example Item', status: 'todo' },
        { description: 'wash the dog', status: 'todo' },
        { description: 'smooch emils', status: 'todo' },
        { description: 'make dinner', status: 'doing' },
        { description: 'do this code challenge', status: 'doing' },
        { description: 'walk bowie', status: 'done' },

      ]
    }

    this.createItem = this.createItem.bind(this)
    this.todoItems = this.todoItems.bind(this)
  }

  createItem(item){
    this.setState((previousState) => {
      return {
        items: [...previousState.items, item]
      }
    })
  }

  todoItems(){
    return this.state.items.filter(item => item.status === 'todo')
  }

  doingItems(){
    return this.state.items.filter(item => item.status === 'doing')
  }

  doneItems(){
    return this.state.items.filter(item => item.status === 'done')
  }

  // onDragStart = (event, description) => {
  //   console.log('dragstart on div: ', description);
  //   event.dataTransfer.setData("description", description);
  // }

  // onDragOver = (event) => {
  //     event.preventDefault();
  // }

  onDragStart = (e, index) => {
    this.draggedItem = this.state.items[index];
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  onDragOver = index => {
    const draggedOverItem = this.state.items[index];

    // if the item is dragged over itself, ignore
    if (this.draggedItem === draggedOverItem) {
      return;
    }

    // filter out the currently dragged item
    let items = this.state.items.filter(item => item !== this.draggedItem);

    // add the dragged item after the dragged over item
    items.splice(index, 0, this.draggedItem);

    this.setState({ items });
  };

  onDrop = (event, status) => {
    let description = event.dataTransfer.getData('description');

    let items = this.state.items.filter((item) => {
        if (item.description === description) {
            item.status = status;
        }
        return item;
    });

    this.setState({
        ...this.state,
        items
    });

    this.draggedItem = null;
  }

  render() {
    const todo = this.todoItems()
    console.log(todo)

    return (
      <div className={styles.primaryContainer}>
        <ItemForm createItem={this.createItem}/>
        <div className={styles.listContainer}>
          <TodoLane onDragOver={this.onDragOver}
      			onDrop={this.onDrop} onDragStart={this.onDragStart} items={this.todoItems()}/>
          <DoingLane onDragOver={this.onDragOver}
      			onDrop={this.onDrop} onDragStart={this.onDragStart} items={this.doingItems()}/>
          <DoneLane onDragOver={this.onDragOver}
      			onDrop={this.onDrop} onDragStart={this.onDragStart} items={this.doneItems()}/>
        </div>
      </div>
    )
  }
}