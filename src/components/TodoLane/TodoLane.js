import React from 'react';
import Item from '../Item/Item'
import styles from './TodoLane.module.css'

export default function TodoLane(props){
  console.log("here are the todo items", props.items)
  return (
    <div className={styles.todo} droppable onDragOver={(event)=>props.onDragOver(event)}
    onDrop={(event)=>{props.onDrop(event, "todo")}}>
      <h3>To do:</h3>
      <ul>
        {props.items.map((item, index) => (
          <Item key={index} item={item} onDragStart={props.onDragStart} />
          )
        )}
      </ul>
    </div>
  )
}