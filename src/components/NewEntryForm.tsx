import { List, ListItem, TextField } from '@mui/material'
import React from 'react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

const NewEntryForm = () => {
  return (
    <div className='form'>
          <form>
            <List>
              <ListItem>
                <TextField variant='outlined' id='tags' label='Tags'></TextField>
              </ListItem>
              <ListItem>
                <TextField variant='outlined' id='values' label='Value'></TextField>
              </ListItem>
              <ButtonSaveOrCancel></ButtonSaveOrCancel>
            </List>
          </form>
        </div>
  )
}

export default NewEntryForm
