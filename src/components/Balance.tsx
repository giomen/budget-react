import React from 'react'
import { StyleType } from '../utils/styleType';
import { Typography } from '@mui/material';

interface BalanceProps {
  title: string;
  amount: number;
}
const styles: StyleType = {
  margin: '10 0'
}

const Balance = (props: BalanceProps) =>  {
  const {title, amount} = props
  return (
    <div className='Header' style={styles}>
      <Typography variant='h5'>{title}</Typography>
      <Typography variant='h4'>{amount}</Typography>
    </div>
  )
}

export default Balance
