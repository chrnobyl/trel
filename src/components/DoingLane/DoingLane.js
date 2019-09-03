import React from 'react';
import Item from '../Item/Item'
import styles from './DoingLane.module.css'

export default function DoingLane(props){
  return (
    <div className={styles.doing} droppable onDragOver={(event)=>props.onDragOver(event)}
    onDrop={(event)=>{props.onDrop(event, "doing")}}>
      <h3>Doing:</h3>
      <ul>
        {props.items.map((item, index) => (
          <Item key={index} item={item} onDragStart={props.onDragStart} />
          )
        )}
      </ul>
    </div>
  )

  // if (props !== undefined) {
  //   return (
  //     <div className={styles.doing}>
  //       <h3>Doing:</h3>
  //       <ul>
  //         {props.items.map((item, index) => (
  //           <Item key={index} item={item} />
  //           )
  //         )}
  //       </ul>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div className={styles.doing}>
  //       <h3>Doing:</h3>
  //     </div>
  //   )
  // }
}