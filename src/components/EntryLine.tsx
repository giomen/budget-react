import { Grid, Typography } from '@mui/material';
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


interface Props {
  label: string;
  value: string;
  isExpense?: boolean;
}

const EntryLine = (props: Props) => {
  const {label, value, isExpense} = props;

  return (
    <div style={{borderTop: `1px solid ${isExpense ? 'red' : 'green'}`}}>
      <Grid container spacing={2}>
        <Grid item xs={8}><Typography>{label}</Typography></Grid>
        <Grid item xs={2}><Typography>{value} €</Typography></Grid>
        <Grid item xs={1}><EditIcon/></Grid>
        <Grid item xs={1}><DeleteIcon/></Grid>
      </Grid>
    </div>
  )
}

export default EntryLine
