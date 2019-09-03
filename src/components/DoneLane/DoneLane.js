import React from 'react';
import Item from '../Item/Item'
import styles from './DoneLane.module.css'

export default function DoneLane(props){
  return (
    <div className={styles.done} droppable onDragOver={(event)=>props.onDragOver(event)}
    onDrop={(event)=>{props.onDrop(event, "done")}}>
      <h3>Done:</h3>
      <ul>
        {props.items.map((item, index) => (
          <Item key={index} item={item} done={true} onDragStart={props.onDragStart}/>
          )
        )}
      </ul>
    </div>
  )
}