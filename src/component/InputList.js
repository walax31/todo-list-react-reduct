import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  button: {
    margin: '1px 0 0 10px !important',
  },
  input: {
    border: '2px #f2d096 solid ',
    width: '250px'
  }
}))


function InputList() {
  const classes = useStyles()

  const dispatch = useDispatch()

  const [newList, setNewList] = useState()

  const handleSubmit = () => {
    if (newList !== '') {
      dispatch({
        type: 'ADD_TODO',
        payload: {
          lable: newList,
          id: Math.ceil(Math.random() * 100)
        },
      },
        setNewList('')
      );
    }
  }

  const handleInputChange = (event) => setNewList(event.target.value);

  return (
    <Container maxWidth="sm" className={classes.container}>
      <TextField
        className={classes.input}
        value={newList}
        onChange={handleInputChange}
        id="outlined-size-small"
        size="small"
      />
      <Button
        className={classes.button}
        variant="contained"
        onClick={handleSubmit}
      >
        <AddIcon />

      </Button>
    </Container>
  )
}
export default InputList;
