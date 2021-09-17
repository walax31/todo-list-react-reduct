import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';


const useStyles = makeStyles({
  text: {
    marginTop: '10px !important',
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    display: 'flex !important',
    alignItems:'center !important',
    paddingLeft:'10px',
    justifyContent: 'space-between',
    border: '2px #C8C6C6 solid ',
    width:'310px',
    height:'35px',
    borderRadius: '5px',
    color: '#304d63',
    '&:hover': {
      transform: 'translateY(-5px)',
      border: '2px #4B6587 solid ',
   },
  },
  notodo :{
    marginTop: '50px !important',
    fontSize: '1rem !important',
    display: 'flex',
    textAlign: 'center'
  },
  box:{
    display: 'flex',
    marginTop: '30px !important',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});


function Todos() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos);
  
  const handleOnClick = (id) => dispatch({
    type: 'DELETE_TODO',
    payload: id,
  })

  if(!todos || !todos.length){
    return  <Typography 
              className={classes.notodo}
              variant="caption" 
              display="block" 
              gutterBottom
             
              > 
              No todo
              </Typography>
  }
  return(
   <Box 
   sx={{ width: '100%' }}
   className={classes.box}
   >
    {todos.map(todo => 
            <Typography 
            className={classes.text}
            variant="caption" 
            display="block" 
            gutterBottom
            >
                {todo.lable}
                <DeleteIcon
                onClick={()=>handleOnClick(todo.id)}/>
            </Typography>
         )}
  </Box>
   
  )
}
export default Todos;
