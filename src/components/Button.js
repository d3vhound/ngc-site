import React from 'react'
import { Link } from './Link'

 
export default (props) => (
  <Link to={props.to} className={`btn btn--` + props.color }>
    <span>{props.text}</span>
  </Link>
)