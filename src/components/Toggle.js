import React from 'react'
import classes from './Toggle.module.css'

const Toggle = () => {
  return (
    <div className={classes.togleMain}>
        <div>Annually</div>
        <button>Button</button>
        <div>Monthly</div>
    </div>
  )
}

export default Toggle