import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: '#FFFFFF',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    brandName: {
        marginLeft: '30px',
        padding: '15px 0px',
        fontWeight: 'bold',
        flexGrow: 1,
    }
})

const Layout = (props) => {
    const { classes, children, open, message } = props;
    //const [open, setOpen] = useState(false);    
    return (
        <div className={classes.main}>
            <AppBar position="static" color="primary" >
                <Toolbar>
                    <Typography className={classes.brandName}>HelloBuild</Typography>
                    <Button color="inherit" onClick={() => props.history.push('/github') }>Github Section</Button>
                    <Button color="inherit" onClick={() => props.history.push('/calendar') }>Calendar Section</Button>

                    </Toolbar>
            </AppBar>
            {children}
            <Snackbar
                    ContentProps={{
                        classes: {
                            root: classes.snack
                        }
                    }}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={open}
                    message={message}
                />
        </div>
        )
}

export default withStyles(styles)(Layout);