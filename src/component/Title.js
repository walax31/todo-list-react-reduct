import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  text: {
    fontWeight: 'bold !important',
    padding: '30px 20px 20px 20px !important',
    fontSize: '1.5rem !important',
    color: '#304d63',
    fontWeight: 'bold !important',

  },
});

function Title() {
  const classes = useStyles()
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography
        className={classes.text}
        gutterBottom
        component="div">
        Add Your List Here 😉
      </Typography>
    </Container>
  )
}
export default Title;
