import { Box, Typography, makeStyles } from "@material-ui/core"


const useStyles = makeStyles(theme => ({
    infohead:{
        background: '#f44336',
        color:'#ffffff',
        height:49,
        display: 'flex',
        alignItems: 'center',
        width:'60%',
        margin:"0 auto",
        marginBottom: 30,
        [theme.breakpoints.down('md')]:{
            display:'none'
        }
        
    },
    text:{
        fontSize:14,
        marginLeft:50,
        fontWeight: 300
    }, 
    logo:{
        height:33,
        '&:last-child':{
            margin: '0 50px 0 20px'
        }
    }
}))

export const Info = () => {
    const classes = useStyles()

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png'
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png'

  return (
      <Box className={classes.infohead}>
        <Typography className={classes.text}>
        For the best experience use <b>inshorts</b> app on your smartphone
        </Typography>
        <Box style={{marginLeft: 'auto'}}>
            <img src={appleStore} alt="appstore" className={classes.logo}/>
            <img src={googleStore} alt="playstore" className={classes.logo}/>
        </Box>
      </Box>
  )
}
