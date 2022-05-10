import { Button, Grid, List, ListItem, TextField, Typography } from '@mui/material';
import * as React from 'react';
import Header from './components/Header';
import './styles/App.scss'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const App = () => {
  return (
    <div>
      <h1>Budget</h1>
      <Header title="Your balance" amount={0}/>
      <div className="resumeGrid">
        <div className="resumeGridItems">
          <div className="label">Incomes</div>
          <div className="valueIncomes">1000.00</div>
        </div>
        <div className="resumeGridItems">
          <div className="label">Outcomes</div>
          <div className="valueOutcomes">1000.00</div>
        </div>
      </div>
      <div>
        <Typography variant='h6'>Hystory</Typography>
        <div className="borderRed">
          <Grid container spacing={2}>
            <Grid item xs={8}><Typography>Something</Typography></Grid>
            <Grid item xs={2}><Typography>100.00 €</Typography></Grid>
            <Grid item xs={1}><EditIcon/></Grid>
            <Grid item xs={1}><DeleteIcon/></Grid>
          </Grid>
        </div>
        <div className="borderGreen">
          <Grid container spacing={2}>
            <Grid item xs={8}><Typography>Something</Typography></Grid>
            <Grid item xs={2}><Typography>100.00 €</Typography></Grid>
            <Grid item xs={1}><EditIcon/></Grid>
            <Grid item xs={1}><DeleteIcon/></Grid>
          </Grid>
        </div>
        <div className="borderRed">
          <Grid container spacing={2}>
            <Grid item xs={8}><Typography>Something</Typography></Grid>
            <Grid item xs={2}><Typography>100.00 €</Typography></Grid>
            <Grid item xs={1}><EditIcon/></Grid>
            <Grid item xs={1}><DeleteIcon/></Grid>
          </Grid>
        </div>
      </div>
      <div>
        <Typography variant='h6'>Add Transaction</Typography>
        <div className='form'>
          <form>
            <List>
              <ListItem>
                <TextField variant='outlined' id='tags' label='Tags'></TextField>
              </ListItem>
              <ListItem>
                <TextField variant='outlined' id='values' label='Value'></TextField>
              </ListItem>
              <ListItem><Button color='error' variant='contained'>Cancel</Button></ListItem>
              <ListItem><Button color='info' variant='contained'>Ok</Button></ListItem>
            </List>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
