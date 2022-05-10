import { Button } from '@mui/material'
import React from 'react'
import { StyleType } from '../utils/styleType'

const styles: StyleType = {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  columnGap: 8,
  width: '300px'
}

const ButtonSaveOrCancel = () => {
  return (
    <div style={styles}>
      <Button color='error' variant='contained'>Cancel</Button>
      <Button color='info' variant='contained' type='submit'>Ok</Button>
    </div>
  )
}

export default ButtonSaveOrCancel
