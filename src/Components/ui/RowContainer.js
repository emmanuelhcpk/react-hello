import React from 'react';

const RowBodyContainer = (props) => {
    const { classes, children, style } = props;
    return (
        <div style={{ justifyContent: 'space-between', display: 'flex', padding: '20px', alignItems: 'center' }}>
            {children}
        </div>
    );
}
export default RowBodyContainer;