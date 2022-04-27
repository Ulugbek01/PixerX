import React from 'react'
import { BtnLink } from './style'

export const ButtonLink = (props) => {
  return (
    <BtnLink {...props}>{props.children}</BtnLink>
  )
}
