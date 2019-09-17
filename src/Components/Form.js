import React from 'react';

class Form extends React.Component {    
    constructor(props,state){
        super(props)
        this.state = {...state, message:'', open: false};
    }

    getField = (field) => {
       return {
            value: this.state[field],
            onChange: (e) => this.handleChange(e, field),
        }
    }

    notify = (message,callback = ()=>{}, time = 5000) => {
        this.setState({ open: true, message: message });
        setTimeout(() => {
            callback();
            this.setState({ open: false });
        }, time);
    };

    handleChange = (e, field) => {
        const data = { ...this.state };
        data[field] = e.target.value;
        this.setState(data);
    };


}
export default Form;