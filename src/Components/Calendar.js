import React from 'react';
import Layout from './ui/Layout'
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ApiCalendar from 'react-google-calendar-api';
import Button from '@material-ui/core/Button';
//table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import RowBodyContainer from './ui/RowContainer'

const styles = theme => ({
    root: {
        padding: "30px 30px",
        margin: "auto",
    },
    table: {
        minWidth: 650,
    }
});

class Calendar extends React.Component {
  
    constructor(props){
        const state = {
            events: [],
            open: false,
            message: '',
            sign: ApiCalendar.sign,
        }
        console.log(ApiCalendar.sign)
        
        super(props)
        this.state = state;  
        //handle session status  
        ApiCalendar.onLoad(() => {
            
            ApiCalendar.listenSign(this.signUpdate);
        });
        if(ApiCalendar.sign){
            this.fetchEvents();
        }
    }

    signUpdate = (sign) => {
        this.setState({
            sign
        })
        if(sign){
            this.fetchEvents();
        }
    }

    handleLoginGoogle = (ev,name) => {
        ApiCalendar.handleAuthClick();        
    }

    handleLogoutGoogle = (ev,name) => {
        ApiCalendar.handleSignoutClick();        
    }

    fetchEvents = async () => {
        try {
            const events = await ApiCalendar.listUpcomingEvents(10)
            console.log(events);
            this.setState({events:events.result.items});
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        const { classes } = this.props;
        const {open, message, sign, events} = this.state;
        return (
            <Layout open={open} message={message} {...this.props}>
                <Paper className={classes.root}>
                    <div>
                        <RowBodyContainer>
                            <Typography variant="h5" component="h3">
                                This is Calendar Section
                            </Typography>

                            {!sign ? <Button variant="contained" color="info" onClick={this.handleLoginGoogle} > Authenticate with Google</Button> 
                            : <Button variant="contained" color="info" onClick={this.handleLogoutGoogle} > Logout of Google</Button>
                            } 
                        </RowBodyContainer>
                        <Table className={classes.table}>
                            <TableHead>
                            <TableRow>
                                <TableCell>Summary</TableCell>
                                <TableCell align="right">Date Of Event</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Link</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {events.map((row,index) => (
                                <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.summary}
                                </TableCell>
                                <TableCell align="right">{row.start.dateTime}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right"><a href={row.htmlLink}>Event Link</a></TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>          
                    </div>
                </Paper>
            </Layout>
            )
    }
    
  }
  export default withStyles(styles)(Calendar);