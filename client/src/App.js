
import {Box,makeStyles} from '@material-ui/core'
//components
import { Header } from './components/Header'
import { Info } from './components/Info'
import { Article } from './components/Article'

const useStyles = makeStyles({
  container:{
    marginTop:108
  }

})

export const App = () => {
  const classes = useStyles()
  
  return (
    <Box>
    <Header />
    <Box className={classes.container}>
    <Info />
    <Article />
    </Box>
    </Box>
  );
}

