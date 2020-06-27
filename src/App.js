import React from 'react';
import Button from '@material-ui/core/Button';
import { 
  Typography, 
  CssBaseline, 
  makeStyles, 
  Paper, 
  Container,
  Grid,
  Box
 } from '@material-ui/core'
 import RecipeReviewCard from './components/Card'
 import NavBar from './components/Navbar'

const useStyles = makeStyles((theme) => ({
  paper: {
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid #e5e5e5'
  },
  cardsLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    alignItems: 'center',
    justifyItems: 'center',
    gridGap: '20px',
    padding: '10px'
  }
}))

let cards = [{id: 'asdfsdfa'},{id: 'gertyert'},{id: 'dffpodskof'},{id: 'asdfsdfa'},{id: 'gertyert'},{id: 'dffpodskof'}]

function App() {
  const classes = useStyles()
  const cardsLayout = cards.map((card, i, array) => {
    return <RecipeReviewCard/>
  })

  return (
    <div className="App">
    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
      <NavBar/>
      <div className={classes.cardsLayout}>
        {cardsLayout}
      </div>
    </React.Fragment>
    </div>
  );
}

export default App;
