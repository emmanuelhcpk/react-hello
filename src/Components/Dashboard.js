import React from 'react';
import Layout from './ui/Layout'
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: "auto"
    }
});

class Dashboard extends React.Component {
  
    constructor(props){
        const state = { 
            open: false,
            message: ''
        }
        super(props)
        this.state = state;        
    }
    
   
    render() {
        const { classes } = this.props;
        const {open, message} = this.state;
        return (
            <Layout open={open} message={message} {...this.props}>
                <Paper className={classes.root}>
                    <Typography variant="h5" component="h3">
                    This is Demo Page for HelloBuild.
                    </Typography>
                </Paper>
            </Layout>
            )
    }
    
  }
  export default withStyles(styles)(Dashboard);