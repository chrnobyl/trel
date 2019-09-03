import React from 'react';
import Confetti from 'react-dom-confetti';
import styles from './Item.module.css'

export default function Item(props){
  const config = {
    angle: 90,
    spread: 45,
    startVelocity: 45,
    elementCount: 50,
    dragFriction: 0.1,
    duration: 3000,
    stagger: 0,
    width: "10px",
    height: "10px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

  return (
    <div>
      <Confetti active={ props.done } config={config} />
      <div className={styles.item} draggable onDragStart={(event) => props.onDragStart(event, props.item.description)}>
        {console.log(props.done)}
        <p>{props.item.description}</p>
      </div>
    </div>
  )
}