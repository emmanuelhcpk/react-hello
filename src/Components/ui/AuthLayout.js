import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
    snack: { background: '#b5615e', fontFamily: '"Source Sans Pro", sans-serif', fontSize: 20, justifyContent: 'center'},
    root: { width: '40%', marginLeft: 'auto', marginRight: 'auto', marginTop: '3%', marginBottom: '3%', backgroundColor: '#efefef', boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.49)' },
});

const authStyles = theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
})

const Layout = (props) => {
    const { classes, children } = props;
    return (
        <div style={authStyles.main}>
            <div style={{ display: 'flex', justifyContent: 'center', height: '50px' }}>
            </div>
            {children}
        </div>
    )
};

const AuthLayout = (props) => {
        const { classes, message, open, children } = props;
        return (
            <MuiThemeProvider>
                <Layout>
                    <Card className={classes.root} elevation={0} style={{ borderRadius: 0 }} >
                        {children}
                    </Card>
                </Layout>
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
            </MuiThemeProvider>
        );
}

AuthLayout.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AuthLayout);
