import Form from './Form'
import React from 'react';
import AuthLayout from './ui/AuthLayout'
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RowBodyContainer from './ui/RowContainer'
import {register} from '../Services/auth.service'

const styles = theme => ({
    textfield : {
        width:"100%",
    },
    container : {
        padding: '20px'
    },
    main: { justifyContent: 'space-between', display: 'flex', padding: '20px', alignItems: 'center' }

});

class Signup extends Form {
    constructor(props){
        const state = {
            email: '',
            password: '',
            passwordConfirmation: '',
            name: ''
        }
        super(props, state)
        this.state = state;        
    }

    valid = () => {
        const { password, passwordConfirmation, name, email } = this.state;
        return password.length > 0 && name.length > 0 && email.length > 0;
    }

    handleSubmit = (evt) => {
      evt.preventDefault();
      const {password, passwordConfirmation, name, email} = this.state;
      if(password === passwordConfirmation && this.valid()) {
          try {
            register({password, name, email});
            this.notify("User registered succesfully",() => this.props.history.push('/') ,3000);
          } catch (err){
            this.notify(err.msg);
          }
        
      } else {
        this.notify("Incomplete register form");
      }
    }
 
    render() {
        const { classes } = this.props;
        const {open, message} = this.state;
        return (
            <AuthLayout open={open} message={message}>
                <AppBar position='static' style={{ boxShadow: 'none' }}>
                    <Tab label='Register' />
                </AppBar>
                <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>

                    <RowBodyContainer>
                        <TextField
                            {...this.getField('name')}
                            label="Name"
                            className={classes.textfield}
                        />
                     </RowBodyContainer>

                     <RowBodyContainer>
                        <TextField
                            {...this.getField('email')}
                            label="Email"
                            type="email"
                            required
                            className={classes.textfield}
                        />
                     </RowBodyContainer>

                     <RowBodyContainer>
                        <TextField
                            {...this.getField('password')}
                            label="Password"
                            type="password"
                            required
                            className={classes.textfield}
                        />
                     </RowBodyContainer>

                     <RowBodyContainer>
                        <TextField
                            {...this.getField('passwordConfirmation')}
                            label="Password Confirmation"
                            type="password"
                            required
                            className={classes.textfield}
                        />
                     </RowBodyContainer>

                     <RowBodyContainer>
                        <Button variant="contained" color="primary" fullWidth type="submit" disabled={open}>
                            Register
                        </Button>
                     </RowBodyContainer>
                </form>
            </AuthLayout>)
    }
  }

  export default withStyles(styles)(Signup);