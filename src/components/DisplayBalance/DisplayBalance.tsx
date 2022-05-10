import { Typography } from '@mui/material'
import React from 'react'

interface Props {
  label: string;
  value: string;
  type: 'income' | 'outcome'
}

const DisplayBalance = (props: Props) => {
  const {label, value, type} = props
  return (
    <div>
      <Typography variant='subtitle1'>{label}</Typography>
      <Typography variant='h6'><span style={{color: type === 'income' ? 'green' : 'red'}}>{value}</span></Typography>
    </div>
  )
}

export default DisplayBalance
