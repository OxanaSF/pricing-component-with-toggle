import React from 'react'
import Card from './Card'
import classes from './CardDisplay.module.css'

const CardDisplay = () => {
  return (
    <div className={classes.cardDisplay}>
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default CardDisplay