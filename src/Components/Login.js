import Form from './Form'
import React from 'react';
import AuthLayout from './ui/AuthLayout'
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RowBodyContainer from './ui/RowContainer'
import { login } from '../Services/auth.service'
const styles = theme => ({
    textfield : {
        width:"100%",
    },
    container : {
        padding: '20px'
    },
    main: { justifyContent: 'space-between', display: 'flex', padding: '20px', alignItems: 'center' }

});

class Login extends Form {  
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = (evt) => {
        evt.preventDefault();
        try {
            const valid = login(this.state);
            if(valid) {
                this.props.history.push('/dashboard') 
            } else {
                this.notify("Invalid Credentials!")
            }
        } catch (err) {
            this.notify("Invalid Credentials!")
        }
    }
    
    render() {
        const { classes } = this.props;
        const {open, message} = this.state;
        return (
            <AuthLayout open={open} message={message}>
                <AppBar position='static' style={{ boxShadow: 'none' }}>
                    <Tab label='LOGIN' />
                </AppBar>
                <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <RowBodyContainer>
                        <TextField
                            {...this.getField('email')}
                            label="Email"
                            className={classes.textfield}
                        />
                     </RowBodyContainer>

                     <RowBodyContainer>
                        <TextField
                            {...this.getField('password')}
                            label="Password"
                            type="password"
                            className={classes.textfield}
                        />
                     </RowBodyContainer>
                     <RowBodyContainer>
                        <Button variant="contained" color="primary" fullWidth type="submit" disabled={open}>
                            Login
                        </Button>
                     </RowBodyContainer>
                </form>
            </AuthLayout>)
    }
    
  }
  export default withStyles(styles)(Login);