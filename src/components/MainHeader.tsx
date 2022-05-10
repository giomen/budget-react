import React from 'react'
import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { StyleType } from '../utils/styleType';

interface Props {
  title: string;
  type: Variant | 'inherit';
}

const styles: StyleType = {
  margin: '10px 0'
}

const MainHeader = (props: Props) => {
  const {title, type} = props
  return (
    <div className='MainHeader' style={styles}>
      <Typography variant={type}>{title}</Typography>
    </div>
  )
}

export default MainHeader
