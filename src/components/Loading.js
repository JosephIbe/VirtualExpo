import React from 'react';

const Loading = () => {

    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        height: '100%',
        backgroundColor: '#050606'
    }

    return (
        <div style={style}>
            Loading data...
        </div>
    );
};

export default Loading;
